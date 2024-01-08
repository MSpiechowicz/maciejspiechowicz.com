<script>
  import Header from '../components/MyHeader.svelte';
</script>

<div class="main-container">
  <Header />
  <main></main>
  <footer></footer>
</div>

<style lang="scss">
  @import '../styles/font.scss';
  @import '../styles/global.scss';
	@import '../styles/reset.scss';

  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
</style>
