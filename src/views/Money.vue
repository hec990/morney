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
type Record = {
  tags: string[],

  notes: string,
  type: string,
  amount: number
}


@Component({
  components: {Notes, Types, Tags, NumberPad},
})

export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  recordList: Record[] = [];
  record: Record = {
    tags:[],
    notes: '',
    type: '-',
    amount: 10
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
    const record2 = JSON.parse(JSON.stringify(this.record));
    this.recordList.push(record2);
    console.log(this.recordList);
  }
  @Watch('recordList')
  onRecordListChange() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss" scoped>

</style>