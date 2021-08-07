<template>  
        <span class="wrapper">
             <svg class="icon" aria-hidden="true" >
                <use :xlink:href="`#icon-${name}`"></use>
            </svg>
        </span>
</template>
<script lang="ts">
export default {
    props:{
        name:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="scss">
    .icon {
       width: 2em; height: 2em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>