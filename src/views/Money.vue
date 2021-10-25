<template>
    <Layout>
      <Tags :data-source.sync="tags" @update:value="onupdateTags"/>
      <Notes field-name="备注"
             placeholder="在这里输入备注"
             @update:value="onupdateNotes"
      />
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
import recordListModel from '@/models/recordListModel.ts';
import tagListModel from "@/models/tagListModel";
const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();



@Component({
  components: {Notes, Types, Tags, NumberPad},
})

export default class Money extends Vue {
  tags = tagList;
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
    const record2: RecordItem = recordListModel .clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }
  @Watch('recordList')
  onRecordListChange() {
    recordListModel .save(this.recordList);
  }
}
</script>

<style lang="scss" scoped>

</style>