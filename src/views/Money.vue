<template>
    <Layout>
      <Tags :data-source.sync="tags" @update:value="onupdateTags"/>
      <Notes @update:value="onupdateNotes"/>
      <Types :value.sync="record.type" />
      <NumberPad @update:value="onupdateAmount" @submit="saveRecord"/>
    </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/money/NumberPad.vue";
import Tags from "@/components/money/Tags.vue";
import Types from "@/components/money/Types.vue";
import Notes from "@/components/money/Notes.vue";
import {Component,Watch} from "vue-property-decorator";
import model from '@/model.ts';
const recordList = model.fetch();



@Component({
  components: {Notes, Types, Tags, NumberPad},
})

export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    tags:[],
    notes: '',
    type: '-',
    amount: 0,
  }

  onupdateTags(value:string[]){
    this.record.tags = value;
  }

  onupdateNotes(value:string){
    this.record.notes = value;

  }

  onupdateAmount(value:string){
    this.record.amount = parseFloat(value);
  }
  saveRecord() {
    const record2: RecordItem = model.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }
  @Watch('recordList')
  onRecordListChange() {
    model.save(this.recordList);
  }
}
</script>

<style lang="scss" scoped>

</style>