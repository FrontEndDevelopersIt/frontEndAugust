<template>
  <div class="frame" >


  <div class="label">
    <div class="container">

        <div class="try">
          <label class="lbl"><p>Password:</p></label>
        </div>


        <div class="password">
          <input type="password" name="Password" v-model="user.password" placeholder="Password" maxlength="16" >
        </div>
        <span class="error_control" v-show="isError">
                            {{ passwordMsg }}
        </span>



        <div class="try">
          <label class="lbl"><p>Confirm password:</p></label>
        </div>


        <div class="password conf">
          <input type="password" name="Password2" v-model="user.password2" placeholder="Repeat password" maxlength="16">
          <br>
          <span class="error_control" v-show="isError">
            {{ passwordMsg2 }}
          </span>
        </div>


        <button :class="{active: disableBtn}" :disabled="disableBtn" @click.prevent="onReset">
          Reset
        </button>

    </div>
  </div>
  </div>
</template>
<script>
    import Vue from 'vue'
    import Vuex from 'vuex'
    import VueAxios from 'vue-axios'
    import Regostration from './registration.vue'
    import validationService from '../../src/validation'
    import request from '../../src/api'

    export default {
        name: "change",
        data() {
            return {
                user: {
                    password: '',
                    password2: '',
                },
                isError: true,
                passwordMsg: '',
                passwordMsg2: '',
                disableBtn: true,
            }
        },

        watch: {
            'user.password': function (value) {
                console.log(value);
                this.passwordMsg = validationService.CheckPswd(value);
                this.disableBtn = validationService.checkPasswordsMatch(this.user.password, this.user.password2);
                console.log(this.disableBtn);
            },
            'user.password2': function (value) {
                console.log(value);
                this.passwordMsg2 = validationService.CheckPswd(value);
                if(!validationService.checkPasswordsMatch(this.user.password, this.user.password2)) {
                    this.disableBtn = false;
                }else {
                    this.passwordMsg2 = 'Passwords are not match';
                    this.disableBtn = true;
                }
                console.log(this.disableBtn);
            }
        },

        methods:{
            onReset(){
                const url = 'http://jsonplaceholder.typicode.com/posts';
                const params = [
                    this.user.password,
                ];
                if(this.user.password!== '' && this.user.password2){
                    request.postData(url, params);
                }
                else{
                    alert('something wrong!!!');
                }
                console.log(document.location.href);
            }
        }
    }
</script>
<style scoped>
.frame {
  height: 74.1vh;
}
  .container {

    text-align: left;
    color: white;
    margin-top: 30px;
    padding: 20px 50px 30px 50px;
    color: white;
    width: 550px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.15);
    background-image: url(/src/img/blue.jpg);
    background-position: center;
    background-attachment: fixed;
  }

  .label {
    width: 550px;
    height: 200px;
    margin: 30px auto;
    text-align: center;
    border-radius: 20px;
    color: red;
    background-color: #EF7F35;
    box-shadow: 1px 2px 4px 2px rgba(0,0,0,0.15);
    padding-left: 10px;
  }

  h1, h2 {
    font-weight: normal;
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
    color: #ff7f2b;
  }

  label {
    color: white;
    font-size: 15px;

  }
  input{

    background-color: white;
    border-bottom-color: grey;
    border-radius: 10px;
    color: black;
    padding-left: 5px;
    border: none!important;
    padding-left: 5px;
    position: relative;
    height: 35px;
    box-shadow: 1px 2px 4px 2px rgba(0,0,0,0.15);
    border-radius: 5px;
    color: black;
    background-color: #fff;
    margin-bottom: 0px;
    outline: 0!important;
  }
  .btn {
    background-color: #ff7f2b;
    margin: auto;
    width: 100px;
    height: 40px;
  }

  .input:focus{
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .btn {
    color: white;
    background-color: #EF7F35;
    width: 200px;
    border-radius: 5px;
    height: 40px;
    padding-left: 20px;
    border: none;
    box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.15);
    cursor: pointer;
    text-align: center;

  }

  .btn:active {
    transform: translateY(4)
  }

  .btn:hover{
    box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.3);
  }

  .tr {
    text-align: center;
  }
  .try {
    text-align: center;
    margin-right: 10px;
    margin-top:0px;
  }

  span {
    color: white;
    font-style: italic;
    opacity: 1;
  }

  .top {
    margin-top: 40px;
  }

  .check{
    width: 14px;
    vertical-align: bottom;
    margin-bottom: 15px;
    border-radius: 0;
    opacity: 1!important;
    background-color: none;
    box-shadow: none;

  }

  button{
    background-color: #ff7f2b;
    width: 100px;
    height: 40px;
    color: white;
    background-color: #EF7F35;
    width: 200px;
    border-radius: 5px;
    height: 40px;
    border: none;
    box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.15);
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
    margin-left: 120px;
  }

</style>
