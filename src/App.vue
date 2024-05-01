<script setup>
import { ref, onMounted } from "vue";
import * as signalR from "@microsoft/signalr";
import { Post_key } from "./backend/api";
import { Get_file } from "./backend/file";
import { UP_file } from "./backend/up_file";

const text = ref("");
let connection = null;

const state = ref({
  userMessage: "",
  Message: [],
});

// async function send() {
//   await connection.invoke("Sendmessage", text.value, 999)
//   state.value.userMessage = ''
// }

let cc = {
  name: "9999",
  age: 11,
  abc: [
    { aa: "999", bb: "sssss" },
    { aa: "939", bb: "swwwss" },
  ],
};

async function send() {
  let aa = await Post_key({
    name: "9999",
    age: 11,
    abc: [
      { aa: "999", bb: "sssss" },
      { aa: "939", bb: "swwwss" },
    ],
  });
  console.log(aa);
}

onMounted(async () => {
  //禁止協商方式
  // let  option = {
  //   skipNegotiation: true, transport:signalR.HttpTransportType.WebSockets
  // }
  // connection = new signalR.HubConnectionBuilder()
  //   .withUrl("http://localhost:5120/myhub")   //後面可加參數 withUrl("http://localhost:5120/myhub", option)
  //   .withAutomaticReconnect().build()
  // await connection.start()
  // //這邊要監聽 後端給的事件名稱
  // connection.on("接收公共訊息", (data,sss) => {
  //   console.log(sss);
  //   state.value.Message.push(data)
  // });
});

//下載文件
onMounted(async () => {
  let res = await Get_file();
  console.log(res.data);
  var content = res.data;
  var blob = new Blob([content]);
  var fileName = "apple.xlsx"; //要保存的文件名称

  var elink = document.createElement("a");
  elink.download = fileName;
  elink.style.display = "none";
  elink.href = URL.createObjectURL(blob);
  document.body.appendChild(elink);
  elink.click();
  URL.revokeObjectURL(elink.href); // 释放URL 对象
  document.body.removeChild(elink);
});


async function uploadExcel() {
  const input = document.getElementById("excelFileInput");
  const file = input.files[0];

  if (!file) {
    alert("Please select a file.");
    return;
  }

  const formData = new FormData();
  formData.append("vvv", file);
  await UP_file(formData)
}

</script>

<template>
  <input type="file" id="excelFileInput" accept=".xlsx, .xls" />
  <button @click="uploadExcel()">Upload Excel</button>
</template>
