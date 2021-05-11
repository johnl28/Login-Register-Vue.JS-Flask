<template>
    <div class="watch">  

        <div class="card-body">
            <video width="520" height="340" controls>
            <source src="./../assets/mov_bbb.mp4" type="video/mp4">
            Your browser does not support the video tag.
            </video>
        </div>

    </div>
</template>

<script>
export default 
{
  name: 'watch',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.watch
{
  
    position: relative;
    left: 1%;
    border: solid 1px #393a3f;
    top: 20px;
    width: 86.5%;
    border-radius: 5px;
	  -webkit-box-shadow: 0px 0px 12px 0px #000000; 
	  box-shadow: 0px 0px 12px 0px #000000;
    color: #8b8d9b;
    padding: 30px;
}
</style>


