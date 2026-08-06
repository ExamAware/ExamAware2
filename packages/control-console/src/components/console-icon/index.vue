<template>
  <component :is="iconComponent" v-if="iconComponent" v-bind="$attrs" :size="size" />
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue';
import {
  AddIcon,
  AppIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseCircleIcon,
  ControlPlatformIcon,
  DashboardIcon,
  DeleteIcon,
  DesktopIcon,
  DeviceIcon,
  EditIcon,
  EllipsisIcon,
  ErrorCircleIcon,
  FolderSettingIcon,
  HelpCircleIcon,
  HomeIcon,
  LogoGithubIcon,
  MailIcon,
  MoonIcon,
  NotificationIcon,
  PlayCircleIcon,
  PoweroffIcon,
  RefreshIcon,
  RollbackIcon,
  SearchIcon,
  SecuredIcon,
  SettingIcon,
  SunnyIcon,
  TimeIcon,
  UploadIcon,
  UserAddIcon,
  UserCircleIcon,
  UsergroupAddIcon,
  WifiOffIcon
} from 'tdesign-icons-vue-next';

defineOptions({ inheritAttrs: false });

const props = defineProps<{
  name: string;
  size?: string;
}>();

const icons: Record<string, Component> = {
  add: AddIcon,
  app: AppIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  calendar: CalendarIcon,
  check: CheckIcon,
  'check-circle': CheckCircleIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  'close-circle': CloseCircleIcon,
  'control-platform': ControlPlatformIcon,
  dashboard: DashboardIcon,
  delete: DeleteIcon,
  desktop: DesktopIcon,
  'device-add': DeviceIcon,
  edit: EditIcon,
  ellipsis: EllipsisIcon,
  'error-circle': ErrorCircleIcon,
  'folder-setting': FolderSettingIcon,
  'help-circle': HelpCircleIcon,
  home: HomeIcon,
  'logo-github': LogoGithubIcon,
  mail: MailIcon,
  moon: MoonIcon,
  notification: NotificationIcon,
  'play-circle': PlayCircleIcon,
  poweroff: PoweroffIcon,
  refresh: RefreshIcon,
  rollback: RollbackIcon,
  search: SearchIcon,
  secured: SecuredIcon,
  setting: SettingIcon,
  sunny: SunnyIcon,
  time: TimeIcon,
  upload: UploadIcon,
  'user-add': UserAddIcon,
  'user-circle': UserCircleIcon,
  'usergroup-add': UsergroupAddIcon,
  'wifi-off': WifiOffIcon
};

const iconComponent = computed(() => icons[props.name]);
</script>
