<template>
    <Layout>
      <Tags :data-source.sync="tags"/>
      <Notes/>
      <Types/>
      <NumberPad/>
    </Layout>
</template>

<script>
import NumberPad from "@/components/money/NumberPad.vue";
import Tags from "@/components/money/Tags.vue";
import Types from "@/components/money/Types.vue";
import Notes from "@/components/money/Notes.vue";
export default {
  name: "Money",
  components: {Notes, Types, Tags, NumberPad},
  data() {
    return {
      tags: ['衣', '食', '住', '行']
    }
  }
};
</script>

<style lang="scss" scoped>

</style>