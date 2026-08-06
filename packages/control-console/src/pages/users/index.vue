<template>
  <div class="console-page user-page">
    <PageHeader
      title="用户管理"
      description="维护控制台用户名账户、角色与可用状态，并安全地批量交付一次性密码。"
    >
      <template #actions>
        <t-space>
          <t-button variant="outline" @click="batchVisible = true">
            <template #icon><ConsoleIcon name="usergroup-add" /></template>
            批量创建
          </t-button>
          <t-button @click="openCreate">
            <template #icon><ConsoleIcon name="user-add" /></template>
            创建用户
          </t-button>
        </t-space>
      </template>
    </PageHeader>

    <t-card class="user-workspace" :bordered="false">
      <div class="console-toolbar">
        <div class="console-toolbar__filters user-filter-bar">
          <t-input v-model="search" clearable placeholder="用户名或姓名" @enter="loadUsers">
            <template #prefix-icon><ConsoleIcon name="search" /></template>
          </t-input>
          <t-select
            v-model="roleFilter"
            clearable
            placeholder="全部角色"
            :options="roleOptions"
            @change="loadUsers"
          />
        </div>
        <div class="console-toolbar__actions">
          <span class="console-muted">共 {{ total }} 个账户</span>
          <t-button variant="outline" :loading="loading" @click="loadUsers">查询</t-button>
        </div>
      </div>
      <t-table row-key="id" :data="users" :columns="columns" :loading="loading" hover>
        <template #username="{ row }">
          <t-space direction="vertical" size="small">
            <strong>{{ row.username }}</strong>
            <span>{{ row.name }}</span>
          </t-space>
        </template>
        <template #role="{ row }"
          ><t-tag variant="light">{{ roleLabel(row.role) }}</t-tag></template
        >
        <template #banned="{ row }">
          <t-tag :theme="row.banned ? 'danger' : 'success'" variant="light">{{
            row.banned ? '已禁用' : '正常'
          }}</t-tag>
        </template>
        <template #createdAt="{ row }">{{ formatDateTime(row.createdAt) }}</template>
        <template #operation="{ row }">
          <t-space size="small">
            <t-button variant="text" @click="openEdit(row)">编辑</t-button>
            <t-popconfirm content="重置后旧密码立即失效，确认继续？" @confirm="resetPassword(row)">
              <t-button variant="text">重置密码</t-button>
            </t-popconfirm>
            <t-popconfirm content="确认永久删除此账户？" @confirm="removeUser(row)">
              <t-button theme="danger" variant="text">删除</t-button>
            </t-popconfirm>
          </t-space>
        </template>
      </t-table>
      <t-pagination
        v-model="page"
        v-model:page-size="pageSize"
        :total="total"
        show-jumper
        @change="loadUsers"
      />
    </t-card>
  </div>

  <t-dialog
    v-model:visible="editorVisible"
    :header="editingId ? '编辑用户' : '创建用户'"
    :footer="false"
  >
    <t-form :data="form" layout="vertical" @submit="saveUser">
      <t-form-item
        label="用户名"
        name="username"
        :rules="[
          {
            required: true,
            pattern: /^[A-Za-z0-9_.]{3,32}$/,
            message: '3–32 位字母、数字、下划线或点'
          }
        ]"
        ><t-input v-model="form.username"
      /></t-form-item>
      <t-form-item label="姓名"><t-input v-model="form.name" /></t-form-item>
      <t-form-item label="角色"
        ><t-select v-model="form.role" :options="roleOptions"
      /></t-form-item>
      <t-form-item v-if="!editingId" label="初始密码"
        ><t-input v-model="form.password" type="password" placeholder="留空则自动生成安全密码"
      /></t-form-item>
      <t-form-item v-else label="账户状态"
        ><t-switch v-model="form.active" :label="['正常', '禁用']"
      /></t-form-item>
      <t-form-item
        ><t-space
          ><t-button type="submit" :loading="saving">保存</t-button
          ><t-button variant="outline" @click="editorVisible = false">取消</t-button></t-space
        ></t-form-item
      >
    </t-form>
  </t-dialog>

  <t-dialog v-model:visible="batchVisible" header="批量处理用户" width="720px" :footer="false">
    <t-form layout="vertical" @submit="createBatch">
      <t-form-item label="用户名（每行一个）">
        <t-textarea
          v-model="batchText"
          :autosize="{ minRows: 10, maxRows: 16 }"
          placeholder="exam_operator_001&#10;exam_operator_002&#10;exam_operator_003"
        />
      </t-form-item>
      <t-form-item label="统一角色">
        <t-select v-model="batchRole" :options="roleOptions" />
      </t-form-item>
      <t-form-item label="已有用户名">
        <t-radio-group v-model="existingUserMode">
          <t-radio value="skip">跳过，保留当前账户</t-radio>
          <t-radio value="replace">替换，重置密码、角色并启用账户</t-radio>
        </t-radio-group>
      </t-form-item>
      <t-alert theme="info" message="无效用户名和同批重复项会自动跳过，并在处理结果中逐项报告。" />
      <t-form-item>
        <t-button type="submit" :loading="saving">处理并生成密码表</t-button>
      </t-form-item>
    </t-form>
  </t-dialog>

  <t-dialog
    v-model:visible="credentialsVisible"
    :header="batchResult ? '批量处理结果与账户密码' : '一次性账户密码表'"
    width="760px"
    :close-on-overlay-click="false"
    :footer="false"
  >
    <t-space direction="vertical" size="large" style="width: 100%">
      <t-alert
        v-if="credentials.length"
        theme="warning"
        message="新建或替换账户的密码仅在此处显示一次。请立即下载并妥善保管。"
      />
      <t-alert
        v-if="batchResult"
        theme="info"
        :message="`已新建 ${batchResult.created.length} 个，已替换 ${batchResult.replaced.length} 个，已跳过 ${batchResult.skipped.length} 个。`"
      />
      <t-table
        v-if="credentials.length"
        row-key="username"
        :data="credentials"
        :columns="credentialColumns"
      />
      <template v-if="batchResult?.skipped.length">
        <strong>跳过项目</strong>
        <t-table row-key="username" :data="batchResult.skipped" :columns="skippedColumns">
          <template #reason="{ row }">{{ skippedReasonLabel(row.reason) }}</template>
        </t-table>
      </template>
      <t-space>
        <t-button v-if="credentials.length" @click="downloadCredentials">下载 CSV</t-button>
        <t-button variant="outline" @click="credentialsVisible = false">我已保存</t-button>
      </t-space>
    </t-space>
  </t-dialog>
</template>

<script setup lang="ts">
import type { PrimaryTableCol, SelectOption, SubmitContext } from 'tdesign-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import { onMounted, reactive, ref } from 'vue';
import PageHeader from '@/components/page-header/index.vue';
import { usersApi } from '@/api/control/users';
import type { BatchUsersResult, CreatedCredential, UserRole, UserView } from '@/api/control/types';
import { ApiError } from '@/api/http';

const users = ref<UserView[]>([]);
const loading = ref(false);
const saving = ref(false);
const search = ref('');
const roleFilter = ref<UserRole>();
const page = ref(1);
const pageSize = ref(20);
const total = ref(0);
const editorVisible = ref(false);
const batchVisible = ref(false);
const credentialsVisible = ref(false);
const editingId = ref('');
const credentials = ref<CreatedCredential[]>([]);
const batchResult = ref<BatchUsersResult>();
const batchText = ref('');
const batchRole = ref<UserRole>('viewer');
const existingUserMode = ref<'skip' | 'replace'>('skip');
const form = reactive({
  username: '',
  name: '',
  role: 'viewer' as UserRole,
  password: '',
  active: true
});
const roleOptions: SelectOption[] = [
  { label: '管理员', value: 'admin' },
  { label: '操作员', value: 'operator' },
  { label: '只读用户', value: 'viewer' }
];
const columns: PrimaryTableCol<UserView>[] = [
  { colKey: 'username', title: '用户', minWidth: 220, ellipsis: true },
  { colKey: 'role', title: '角色', width: 110 },
  { colKey: 'banned', title: '状态', width: 100 },
  { colKey: 'createdAt', title: '创建时间', width: 180 },
  { colKey: 'operation', title: '操作', width: 260, fixed: 'right' }
];
const credentialColumns: PrimaryTableCol<CreatedCredential>[] = [
  { colKey: 'username', title: '用户名', minWidth: 220, ellipsis: true },
  { colKey: 'password', title: '一次性密码', minWidth: 300, ellipsis: true },
  { colKey: 'role', title: '角色', width: 110 }
];
const skippedColumns: PrimaryTableCol<BatchUsersResult['skipped'][number]>[] = [
  { colKey: 'username', title: '输入项', minWidth: 280, ellipsis: true },
  { colKey: 'reason', title: '跳过原因', minWidth: 220 }
];
function roleLabel(role: UserRole) {
  return { admin: '管理员', operator: '操作员', viewer: '只读用户' }[role];
}
function skippedReasonLabel(reason: BatchUsersResult['skipped'][number]['reason']) {
  return {
    invalid: '用户名格式无效',
    duplicate: '同一批次重复',
    exists: '用户名已存在',
    protected: '当前登录账户受保护'
  }[reason];
}
function formatDateTime(value: string) {
  return new Date(value).toLocaleString('zh-CN');
}
function openCreate() {
  editingId.value = '';
  Object.assign(form, { username: '', name: '', role: 'viewer', password: '', active: true });
  editorVisible.value = true;
}
function openEdit(user: UserView) {
  editingId.value = user.id;
  Object.assign(form, {
    username: user.username,
    name: user.name,
    role: user.role,
    password: '',
    active: !user.banned
  });
  editorVisible.value = true;
}
function showCredentials(items: CreatedCredential[], result?: BatchUsersResult) {
  credentials.value = items;
  batchResult.value = result;
  credentialsVisible.value = true;
}
async function loadUsers() {
  loading.value = true;
  try {
    const result = await usersApi.list(
      page.value,
      pageSize.value,
      search.value.trim() || undefined,
      roleFilter.value
    );
    users.value = result.items;
    total.value = result.total;
  } finally {
    loading.value = false;
  }
}
async function saveUser(context: SubmitContext) {
  if (context.validateResult !== true) return;
  saving.value = true;
  try {
    if (editingId.value) {
      await usersApi.update(editingId.value, {
        username: form.username,
        name: form.name,
        role: form.role,
        banned: !form.active
      });
      await MessagePlugin.success('用户已更新');
    } else {
      const created = await usersApi.create({
        username: form.username,
        name: form.name || undefined,
        password: form.password || undefined,
        role: form.role
      });
      showCredentials([created]);
    }
    editorVisible.value = false;
    await loadUsers();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '用户保存失败');
  } finally {
    saving.value = false;
  }
}
async function createBatch(context: SubmitContext) {
  if (context.validateResult !== true) return;
  const usernames = batchText.value
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
  if (!usernames.length) {
    await MessagePlugin.warning('请至少输入一个用户名');
    return;
  }
  saving.value = true;
  try {
    const result = await usersApi.createMany(usernames, batchRole.value, existingUserMode.value);
    batchVisible.value = false;
    batchText.value = '';
    showCredentials(result.credentials, result);
    await loadUsers();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '批量处理失败');
  } finally {
    saving.value = false;
  }
}
async function resetPassword(user: UserView) {
  try {
    const result = await usersApi.resetPassword(user.id);
    showCredentials([{ ...user, password: result.password }]);
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '密码重置失败');
  }
}
async function removeUser(user: UserView) {
  try {
    await usersApi.remove(user.id);
    await MessagePlugin.success('用户已删除');
    await loadUsers();
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '用户删除失败');
  }
}
function downloadCredentials() {
  const escape = (value: string) => `"${value.replaceAll('"', '""')}"`;
  const csv = [
    'username,password,role',
    ...credentials.value.map((item) =>
      [item.username, item.password, item.role].map(escape).join(',')
    )
  ].join('\r\n');
  const url = URL.createObjectURL(new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8' }));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `examaware-users-${new Date().toISOString().slice(0, 10)}.csv`;
  anchor.click();
  URL.revokeObjectURL(url);
}
onMounted(() => void loadUsers());
</script>

<style scoped lang="less">
.user-filter-bar {
  .t-input,
  .t-select__wrap {
    width: 240px;
  }
}

@media (max-width: 800px) {
  .user-filter-bar {
    .t-input,
    .t-select__wrap {
      width: 100%;
    }
  }
}
</style>
