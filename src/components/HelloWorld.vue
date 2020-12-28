<template>
  <div class="hello">
    <input type="text" v-model="value" />
    <button type="button" @click="addFriend">Add Cat</button>
    <ul>
      <li class="title">LOADED FROM iDB</li>
      <li :key="cat.id" v-for="cat in friends">
        {{ cat.name }}
        <button type="button" @click="remove(test)">&times;</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { liveQuery } from "dexie";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      value: "",
      friends: [],
    };
  },
  mounted() {
    this.observeFriends();
  },
  methods: {
    observeFriends() {
      const friendsObservable = liveQuery(
        () => this.$db.friends.toArray()
      );

      friendsObservable.subscribe({
        start: (result) => console.log("Got start:", result),
        next: (result) => console.log("Got result:", result),
        complete: (result) => console.log("Got complete:", result),
        error: (error) => console.error(error),
      });

      setTimeout(() => this.$db.friends.add({ name: "Joe", age: 78 }), 5000);
    },
    update() {
      this.$db.eoscommons.toArray().then((friends) => {
        this.friends = friends;
        console.log(friends);
      });
    },
    addFriend() {
      this.$db.friends.add({ id: 100, name: "one", age: 2 });
    },
    remove(test) {
      this.$db.eoscommons
        .where("id")
        .eq(test.id)
        .delete()
        .then(() => this.update());
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
