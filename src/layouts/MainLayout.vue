<template>
  <q-layout
    view="hHh lpr lFf"
    class="main-layout"
    :class="{ 'router-transitioning': routerTransitionInProgress }"
  >
    <q-header elevated class="bg-primary text-white main-layout--header">
      <q-toolbar>
        <!-- Taskbar menu button -->
        <q-btn
          v-ripple
          flat
          round
          dense
          icon="menu"
          class="xs on-left"
          @click="showTaskbar = !showTaskbar"
        />
        <!-- Logo -->
        <router-link
          class="wrapper-link flex items-center"
          :to="{ name: 'home' }"
        >
          <img src="~assets/logo.svg" width="42px" />
        </router-link>
        <!-- Toolbar title -->
        <q-toolbar-title :style="!showTitle ? 'padding: 0;' : ''">
          <router-link class="wrapper-link" :to="{ name: 'home' }">
            <span v-if="showTitle">Juju Lens</span>
          </router-link>
          <q-resize-observer
            @resize="({ width }) => (showTitle = width > 86)"
          />
        </q-toolbar-title>
        <!-- Toolbar tabs -->
        <q-tabs inline-label shrink class="gt-mobile-menu">
          <q-route-tab
            v-for="(link, i) in mainLinks"
            :key="i"
            :icon="link.icon"
            :label="link.label"
            :to="link.to"
            style="font-size: 0.3em;"
          />
        </q-tabs>
        <!-- Controller select -->
        <q-select
          filled
          dark
          v-model="currentController"
          :options="controllerOptions"
          option-label="name"
          label="Controller"
          class="q-mx-sm controller-select"
          popup-content-class="controller-select-popup"
          style="flex: 0.1 1 12em"
        />
        <!-- Alerts Button -->
        <div class="on-right" style="position: relative;">
          <q-btn
            flat
            dense
            :class="{ 'ringing-bell': !!unitErrorCount }"
            icon="fas fa-bell"
            style="padding: 0.2rem"
          >
            <!-- Alerts Menu -->
            <q-menu>
              <q-list class="alert-menu">
                <!-- TODO: Maybe just my machine, but the ripple effect is only visible when
                clicking on a route you are already on. -->
                <q-item
                  clickable
                  v-ripple
                  v-for="alert in unitNotifications"
                  :key="alert.unit.lensId"
                  :to="{ name: 'models', query: { unitId: alert.unit.lensId } }"
                >
                  <q-item-section>
                    <q-item-label>
                      <div class="row items-center">
                        <div clas="col on-left">
                          <span class="on-left">
                            {{ alert.unit.name }}
                          </span>
                        </div>
                        <div class="col row reverse">
                          <q-badge
                            class="col-auto"
                            :class="{ 'text-black': !alert.isError }"
                            :color="alert.isError ? 'negative' : 'warning'"
                          >
                            {{ alert.unit['workload-status'].current }}
                          </q-badge>
                        </div>
                      </div>
                    </q-item-label>
                    <q-item-label
                      v-if="alert.unit['workload-status'].message"
                      caption
                    >
                      {{ alert.unit['workload-status'].message }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <badge v-if="unitErrorCount > 0" left class="bg-negative text-white">
            {{ unitErrorCount }}
          </badge>
          <badge v-if="unitWarningCount > 0" class="bg-warning text-black">
            {{ unitWarningCount }}
          </badge>
        </div>
        <!-- Mobile menu button -->
        <q-btn
          flat
          round
          dense
          icon="menu"
          class="lt-mobile-menu on-right"
          @click="showMenuDrawer = !showMenuDrawer"
        />
      </q-toolbar>
    </q-header>

    <!-- Taskbar -->
    <q-drawer
      v-model="showTaskbar"
      :mini="taskbarMini"
      mini-to-overlay
      bordered
      show-if-above
      :breakpoint="taskbarBreakpoint"
      :width="200"
      content-class="taskbar"
      @mouseover="expandTaskbar"
      @mouseout="collapseTaskbar"
    >
      <div class="column fit no-wrap">
        <q-scroll-area
          class="col"
          :thumb-style="{
            width: '3px'
          }"
        >
          <q-list>
            <!-- TODO: Use transition group for adding and removing these items
            with an animation -->
            <!-- Floating Window List -->
            <q-item
              v-for="window in floatingUnitWindows"
              :key="window.id"
              clickable
              v-ripple
              @click="
                if (window.visible) {
                  focusFloatingUnitWindow(window.id);
                } else {
                  toggleFloatingUnitWindowVisible(window.id);
                  focusFloatingUnitWindow(window.id);
                }
              "
            >
              <!-- Taskbar icon close menu -->
              <q-menu
                context-menu
                anchor="center right"
                self="center left"
                content-style="z-index: 10000"
                transition-show="jump-right"
                transition-hide="jump-left"
              >
                <q-list dense>
                  <q-item
                    clickable
                    v-close-popup
                    @click="removeFloatingUnitWindow(window.id)"
                  >
                    <q-item-section side>
                      <q-icon color="negative" name="fas fa-window-close" />
                    </q-item-section>
                    <q-item-section>Close</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
              <!-- TODO: There's a *tiny* bit of movement with the icon when the tab expands
              here because we lowered the width of the avatar a little bit. It would be nice
              to get rid of it or make it a smooth transition, but for now gaining the extra
              space for the label is worth it. -->
              <q-item-section avatar>
                <q-icon
                  :name="
                    window.kind == 'log' ? 'fas fa-file-alt' : 'fas fa-terminal'
                  "
                />
              </q-item-section>
              <q-item-section>
                {{ window.unit.name }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-separator style="height: 1px" />

        <q-list>
          <!-- Lens Log Menu item -->
          <q-item
            v-if="lensLogWindow.activated"
            clickable
            v-ripple
            @click="updateLensLogWindow({ minimized: false })"
          >
            <!-- Taskbar icon close menu -->
            <q-menu
              context-menu
              anchor="center right"
              self="center left"
              content-style="z-index: 10000"
              transition-show="jump-right"
              transition-hide="jump-left"
            >
              <q-list dense>
                <q-item
                  clickable
                  v-close-popup
                  @click="updateLensLogWindow({ activated: false })"
                >
                  <q-item-section side>
                    <q-icon color="negative" name="fas fa-window-close" />
                  </q-item-section>
                  <q-item-section>Close</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
            <q-item-section avatar>
              <q-icon name="fas fa-file-alt" />
            </q-item-section>
            <q-item-section>
              Juju Lens Logs
            </q-item-section>
          </q-item>

          <!-- Settings Button -->
          <q-item v-if="isTauri" clickable v-ripple @click="showSettingsDialog">
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>
              Settings
            </q-item-section>
          </q-item>

          <!-- Feedback Button -->
          <q-item clickable v-ripple @click="showFeedbackDialog">
            <q-item-section avatar>
              <q-icon name="fas fa-bullhorn" />
            </q-item-section>
            <q-item-section>
              Leave Feedback
            </q-item-section>
          </q-item>

          <!-- Dark mode button -->
          <dark-mode-toggle />

          <!-- Logout -->
          <q-item clickable v-ripple @click="logout">
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section>
              Logout
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <!-- Menu Drawer -->
    <q-drawer
      side="right"
      v-model="showMenuDrawer"
      :width="200"
      content-class="menu-drawer"
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item>
            <q-item-section class="text-weight-bold">
              Menu
            </q-item-section>
          </q-item>
          <q-item
            v-for="(link, i) in mainLinks"
            :key="i"
            clickable
            v-ripple
            :to="link.to"
          >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>

            <q-item-section>
              {{ link.label }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page>
        <transition
          name="router-slide-down"
          mode="out-in"
          v-on:before-leave="routerTransitionInProgress = true"
          v-on:after-enter="routerTransitionInProgress = false"
        >
          <!-- TODO: We need to figure out how to wrap child routes in a scroll
        area or something so that they don't get taller than the screen and
        mess up the fit of the floating windows over the content. For now each
        child route has to manually make sure it fits the page and otherwise
        has a scroll area or somethign to keep from overflowing the page size. -->
          <router-view />
        </transition>

        <!-- Floating Windows -->
        <floating-terminal-window
          v-for="window in floatingTermWindows"
          :key="window.id"
          :floatingWindowId="window.id"
        />
        <floating-log-window
          v-for="window in floatingLogWindows"
          :key="window.id"
          :floatingWindowId="window.id"
        />

        <lens-log-window v-if="lensLogWindow.activated" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import DarkModeToggle from 'components/DarkModeToggle.vue';
import Badge from 'components/Badge.vue';
import FloatingWindowComponent from 'components/FloatingWindow.vue';
import FloatingTerminalWindow from 'components/FloatingTerminalWindow.vue';
import FloatingLogWindow from 'components/FloatingLogWindow.vue';
import LensLogWindow from 'components/LensLogWindow.vue';

import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { actionTypes as jujuActionTypes } from 'store/juju/actions';
import {
  Controller,
  Unit,
  Application,
  UnitStatusSeverity
} from 'store/juju/state';
import { FilledModel } from 'store/juju/state/utils';
const juju = namespace('juju');

import {
  FloatingUnitWindow,
  FloatingWindowKind,
  LensLogWindowState
} from 'store/app/state';
import { mutationTypes as appMutationTypes } from 'store/app/mutations';
const app = namespace('app');

import LensSettingsDialog from 'components/dialogs/LensSettingsDialog.vue';

interface UnitNotification {
  unit: Unit;
  app: Application;
  isError: boolean;
}

@Component({
  components: {
    DarkModeToggle,
    FloatingWindowComponent,
    FloatingTerminalWindow,
    FloatingLogWindow,
    LensLogWindow,
    Badge
  }
})
export default class MainLayout extends Vue {
  @app.State readonly floatingUnitWindows!: FloatingUnitWindow[];
  @app.State readonly lensLogWindow!: LensLogWindowState;
  @app.Mutation(appMutationTypes.removeFloatingUnitWindow)
  removeFloatingUnitWindow!: (id: string) => void;
  @app.Mutation(appMutationTypes.toggleFloatingUnitWindowVisible)
  toggleFloatingUnitWindowVisible!: (id: string) => void;
  @app.Mutation(appMutationTypes.focusFloatingUnitWindow)
  focusFloatingUnitWindow!: (id: string) => void;
  @app.Mutation(appMutationTypes.updateLensLogWindow)
  updateLensLogWindow!: (options: {
    minimized?: boolean;
    maximized?: boolean;
    activated?: boolean;
  }) => void;

  get isTauri(): boolean {
    return !!window.__TAURI__;
  }

  get floatingTermWindows(): FloatingUnitWindow[] {
    return this.floatingUnitWindows.filter(
      window => window.kind == FloatingWindowKind[FloatingWindowKind.terminal]
    );
  }
  get floatingLogWindows(): FloatingUnitWindow[] {
    return this.floatingUnitWindows.filter(
      window => window.kind == FloatingWindowKind[FloatingWindowKind.log]
    );
  }

  @juju.State('currentController') globalCurrentController!: 'All' | string;
  @juju.State controllers!: { [key: string]: Controller };
  @juju.Action(jujuActionTypes.setCurrentController) setCurrentController!: (
    controller: 'All' | string
  ) => Promise<undefined>;
  @juju.Action(jujuActionTypes.logout)
  logout!: () => void;

  get currentController(): 'All' | string {
    return this.globalCurrentController;
  }

  set currentController(value: 'All' | string) {
    void this.setCurrentController(value);
  }
  get controllerOptions(): ('All' | string)[] {
    const controllerNames = [];
    for (const name in this.controllers) {
      controllerNames.push(name);
    }
    return ['All', ...controllerNames];
  }

  readonly taskbarBreakpoint = 599;
  showTaskbar = false;
  taskbarMini = true;

  showMenuDrawer = false;
  routerTransitionInProgress = false;

  showTitle = true;

  // The main menu links
  readonly mainLinks = [
    {
      label: 'Models',
      icon: 'share',
      to: { name: 'models' }
    },
    {
      label: 'Controllers',
      icon: 'gamepad',
      to: { name: 'controllers' }
    }
  ];

  taskbarExpandChangeTimeout: NodeJS.Timeout | null = null;

  expandTaskbar(): void {
    // Clear any pending, delayed collapse of the taskbar
    if (this.taskbarExpandChangeTimeout) {
      clearTimeout(this.taskbarExpandChangeTimeout);
    }

    this.taskbarMini = false;
  }

  collapseTaskbar(): void {
    // Clear any previous, pending, delayed collapse of the taskbar
    if (this.taskbarExpandChangeTimeout) {
      clearTimeout(this.taskbarExpandChangeTimeout);
    }

    // Delay collapsing the taskbor just a little bit/
    // This helps fix some glitchy wrapping and unwrapping behavior of the
    // items in the menu that have labels that overflow and wrap.
    this.taskbarExpandChangeTimeout = setTimeout(() => {
      this.taskbarMini = true;
    }, 300);
  }

  // Filled models for the current controller
  @juju.Getter('currentControllerModelsFilled')
  models!: FilledModel[];

  // Getter for the notifications list
  get unitNotifications(): UnitNotification[] {
    const alerts: UnitNotification[] = [];

    for (const model of this.models) {
      for (const app of model.applications) {
        for (const unit of app.units) {
          const sev = UnitStatusSeverity[unit['workload-status'].current];
          // If the unit does not have a clean status
          if (sev > UnitStatusSeverity.active) {
            alerts.push({
              app,
              unit,
              isError: sev >= UnitStatusSeverity.blocked
            });
          }
        }
      }
    }

    return alerts.sort(
      (a, b) =>
        UnitStatusSeverity[b.unit['workload-status'].current] -
        UnitStatusSeverity[a.unit['workload-status'].current]
    );
  }

  get unitErrorCount(): number {
    return this.unitNotifications.filter(alert => alert.isError).length;
  }

  get unitWarningCount(): number {
    return this.unitNotifications.filter(alert => !alert.isError).length;
  }

  // Used to selectively hide the taskbar on taskbar button click
  windowWidth(): number {
    return window.innerWidth;
  }

  showFeedbackDialog(): void {
    this.$q.dialog({
      title: 'Leave Feedback',
      html: true,
      message:
        'We\'re so glad you want to leave feedback! The best way to let us know what you think is to \
          reply to the Juju Lens \
          <a target="_blank" href="https://discourse.juju.is/t/juju-lens-v0-1-0-new-desktop-application-with-ssh-support/3613?u=zicklag"> \
          announcement</a> on the forum.<br /><br /> \
          \
          If you have bugs or feature requests you can also open an issue on \
          <a href="https://github.com/katharostech/juju-lens/issues" target="_blank">GitHub</a>.'
    });
  }

  showSettingsDialog(): void {
    this.$q.dialog({
      component: LensSettingsDialog,
      parent: this
    });
  }
}
</script>

<style lang="stylus">
.body--light
  .taskbar, .menu-drawer
    background-color $blue-grey-1

.body--dark .q-item.q-router-link--active,
.body--dark .q-item--active
  color $secondary

.body--light .q-item.q-router-link--active,
.body--light .q-item--active
  color darken($secondary, 25%)

.main-layout--header .q-tabs
  margin-right 0.5em
  margin-left 0.5em

.alert-menu .q-item.q-router-link--active
  color unset

.controller-select .q-field__label
  color hsla(0, 0%, 100%, 0.7)

.body--light .controller-select-popup
  .q-item
    background-color white
  :not(.q-item--active).q-item
    color black

.ringing-bell
  transform-origin 50% 7%
  animation-name ring-bell
  animation-duration 5s
  animation-timing-function ease
  animation-iteration-count infinite

// Breakpoint class for mobile menu items
.main-layout
  .lt-mobile-menu
    @media(min-width: 699px)
      display none
  .gt-mobile-menu
    @media(max-width: 699px)
      display none

// Router transition classes
.q-layout.router-transitioning
  max-height 100vh
  max-width 100vw
  overflow hidden

.router-slide-down-enter-active,
.router-slide-down-leave-active
  transition all .4s ease
  overflow hidden

.router-slide-down-enter
  transform TranslateY(-100vh)

.router-slide-down-leave-to
  transform TranslateX(-100vw)

// Animation keyframes
@keyframes ring-bell {
  0%   {transform: none;}
  5%  {transform: rotateZ(-20deg);}
  10%  {transform: rotateZ(20deg);}
  15%  {transform: rotateZ(-12deg);}
  20% {transform: rotateZ(12deg);}
  25% {transform: rotateZ(-5deg);}
  30% {transform: none;}
  100% {transform: none;}
}
</style>
