<template>
  <q-page>
    <div class="row">
      <div class="col q-pa-md">
        <q-input v-model="textarea1" label="First Text" type="textarea"
          placeholder="Insert text here (min 3 characthers)..." />
      </div>
      <div class="col q-pa-md">
        <q-input v-model="textarea2" label="Second Text" type="textarea"
          placeholder="Insert text here (min 3 characthers)..." />
      </div>
    </div>
    <div class="row q-ma-md">
      <q-btn @click="computeStringSimilarity" label="Compare" color="primary" class="q-mr-xs" />
    </div>
    <div class="row q-ma-md">
      <p>Result: {{ stringSimilarity }}</p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import * as similarityUtils from 'src/utils/utils';
import { useTextComparationStore } from 'src/stores/text-comparation-store';
import { useCounterStore } from 'src/stores/example-store';
import { ref } from 'vue';

const textComparationStore = useTextComparationStore();
const counterStore = useCounterStore();

defineOptions({
  name: 'IndexPage'
});

const textarea1 = ref<string>('');
const textarea2 = ref<string>('');
const stringSimilarity = ref<string>('');

function computeStringSimilarity() {
  stringSimilarity.value = similarityUtils.similarityToPercentage(similarityUtils.jaccardSimilarity(textarea1.value, textarea2.value));
  counterStore.increment();
  textComparationStore.addTextComparation(counterStore.counter, textarea1.value, textarea2.value, stringSimilarity.value);
}
</script>
