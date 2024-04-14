<template>
  <div class="q-pa-md">
    <q-table title="Comparations" :rows="rows" :columns="columns" row-key="name">
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn dense round flat color="grey" @click="deleteRow(props.row)" icon="delete"></q-btn>
        </q-td>
      </template>
    </q-table>
  </div>
</template>
<script setup lang="ts">
import { QTable, QTableProps } from 'quasar';
import { TextComparation } from 'src/components/models';
import { useTextComparationStore } from 'src/stores/text-comparation-store';
import { truncateString } from 'src/utils/utils';
import { ref } from 'vue';
const textComparationStore = useTextComparationStore();

const columns: QTableProps['columns'] = [
  { name: 'id', align: 'center', label: 'Id', field: 'id', sortable: true },
  {
    name: 'text1',
    label: 'Text 1',
    align: 'left',
    field: row => row.text1,
    format: val => `${truncateString(val)}`,
    sortable: true
  },
  {
    name: 'text2',
    label: 'Text 2',
    align: 'left',
    field: row => row.text2,
    format: val => `${truncateString(val)}`,
    sortable: true
  },
  { name: 'percentage', label: 'Percentage', field: 'percentage', sortable: true },
  { name: 'actions', label: 'Actions', field: '', align: 'center' },
]

let rows = ref<TextComparation[]>(textComparationStore.textComparations);

function deleteRow(comparation: TextComparation) {
  textComparationStore.removeTextComparation(comparation.id);
  rows.value = textComparationStore.textComparations;
}
</script>
