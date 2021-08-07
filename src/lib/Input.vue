<template>  
        <span class="wrapper">
             <input type="text" :value="value" :disabled="disabled" :readonly="readonly" @input="changeValue($event)" class="gulu-input"/>
        </span>
</template>
<script lang="ts">
export default {
    props:{
        value:{
            type:String,
            default:''
        },
        disabled:{
            type:Boolean,
            default:false
        },
        readonly:{
            type:Boolean,
            default:false
        },
    },
    setup(props,context){
        const changeValue = (e) => { 
            context.emit('update:value',e.target.value)
        }
        return {changeValue}
    }
}
</script>

<style lang="scss">
        $grey: grey;
.wrapper{
    font-size: 14px;
    $blue: #40a9ff;
    margin: 2px ;
    display: inline-block;
    >.gulu-input{
        height: 32px;
        border: 1px solid #999;
        border-radius: 4px;
        padding: 0 8px;
        font-size: inherit;
        &:hover,
        &:focus {
            border-color: $blue;
        }
        &:focus {
            outline: none;
        }
        &[disabled] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;

        }
        &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;

        }
    }
}

</style>