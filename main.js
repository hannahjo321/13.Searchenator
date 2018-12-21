const home = Vue.component('home', {

  template: `
    <div class="container">
      <h1>Welcome to the Searchenator!</h1>
    </div>`,
  methods:{
    getMusic(){
      fetch(`https://itunes.apple.com/search?term=${this.searchTerm}&limit=${this.limit}&entity=${this.entity}`)
      .then( data => data.json())
      .then( songs => {
        this.songList = songs.results;
      })
    }
  }
});

const musicSearch = Vue.component('music-search', {
data: function () {
  return {
    siteTitle: 'Itunes Searchenator 3000',
    songsArray: [
      'Grandma got Ran Over by a Reindeer',
      'Silent Night',
      'Deck the Halls',
      '12 Days of Christmas',
      'Frosty vs Global Warming',
      'Jingle Bell Rock',
      'Oh Christmas Tree',
      'Christmas Can-Can',
    ],
    songsVisible: false,
    searchTerm: 'Testing',
    songList: [],
    limit: 50,
    entity: 'song'
}
},
template: `
  <div id="main">
    <h1> {{ siteTitle }}</h1>

    <input type="text" v-model="searchTerm">
    <input type="number" v-model="limit">
    <select v-model="entity">
      <option value="song">Songs</option>
      <option value="musicVideo">Video</option>
    </select>
    <button v-on:click="getMusic()">Search</button>
    <h2>{{ searchTerm }}</h2>

    <!-- <button v-on:click="songsVisable =!songsVisible">See Songs</button> -->
    <ul v-if="songsVisible">
      <li v-for="song in songsArray">Song Name is: {{ song }}</li>
    </ul>
    <div v-for="song in songList" class="song">
      <h1>{{song.trackName}}</h1>
      <img v-if="song.artworkUrl100" v-bind:src="song.artworkUrl100">
      <h4>{{song.artistName}}</h4>
      <audio v-if="song.previewUrl || song.previewUrl != '' || song.entity !=null" controls>
        <source v-bind:src="song.previewUrl">
      ></audio>
    </div>
  </div>
`,
  methods:{
    //meths
  }
});

const routes = [
  {path: '/', component: home},
  {path: '/search', component: musicSearch},
];

const router = new VueRouter({
  routes
})


Vue.component('sidebar', {
  data: function () {
    return {
      sideBarTitle: 'This is a sidebar'
    }
  },
  template: `
    <div class="container">
      <h1 v-on:click="test()">{{ sideBarTitle }}</h1>
      <div class="sidebar">This is a Sidebar</div>
    </div>`,
  methods:{
    test(){
      alert();
    }
  }
});



const tunesApp = new Vue({
  router,
  el:'#itunesApp',
  data:{

  },
  methods:{

  }
});
