import{_ as f,r as l,o as h,c as w,a as s,b as a,w as v,n as _}from"./index-f2bgMWh1.js";var b={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"annchou",BASE_URL:"/vue_week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:V}=b,g={data(){return{user:{username:"",password:""}}},methods:{login(){const i=`${V}/admin/signin`,{username:o,password:d}=this.user,c={username:o,password:d};this.axios.post(i,c).then(e=>{const{token:n,expired:t}=e.data;document.cookie=`user = ${n}; expires = ${new Date(t)}`,this.$swal.fire("登入成功").then(()=>{this.$router.push("/admin")})}).catch(e=>this.$swal.fire(e.response.data.message))}}},x={class:"container py-5"},E=s("h2",{class:"mb-5 h2 text-center"},"登入使用者後台",-1),k={class:"row justify-content-center"},y={class:"col-6"},P={class:"form-floating mb-3"},I=s("label",{for:"username"},"Email address",-1),S={class:"form-floating mb-3"},$=s("label",{for:"password"},"Password",-1),A=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function B(i,o,d,c,e,n){const t=l("v-field"),m=l("error-message"),p=l("v-form");return h(),w("div",x,[E,s("div",k,[s("div",y,[a(p,{class:"form-signin",onSubmit:n.login},{default:v(({errors:u})=>[s("div",P,[a(t,{id:"username",name:"email",type:"email",class:_(["form-control",{"is-invalid":u.email}]),placeholder:"name@example.com",rules:"email|required",modelValue:e.user.username,"onUpdate:modelValue":o[0]||(o[0]=r=>e.user.username=r)},null,8,["class","modelValue"]),a(m,{name:"email",class:"invalid-feedback"}),I]),s("div",S,[a(t,{id:"userpassword",name:"password",type:"password",class:_(["form-control",{"is-invalid":u.password}]),placeholder:"Password",rules:"required",modelValue:e.user.password,"onUpdate:modelValue":o[1]||(o[1]=r=>e.user.password=r)},null,8,["class","modelValue"]),a(m,{name:"password",class:"invalid-feedback"}),$]),A]),_:1},8,["onSubmit"])])])])}const T=f(g,[["render",B]]);export{T as default};
