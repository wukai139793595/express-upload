<template>
  <div class="upload">
    <el-upload
      class="upload-demo"
      action="http://localhost:3000/disk"
      accept="image/jpeg,image/jpg,image/png"
      :file-list="fileList"
      :auto-upload="true"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <h1>--------------------</h1>
    <form
      action="http://localhost:3000/disk"
      method="post"
      enctype="multipart/form-data"
    >
      <input type="file" name="disk" id="disk" />
      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
import api from "@/api/index.js";
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      fileList: [
        // {
        //   name: "food.jpeg",
        //   url:
        //     "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        // },
        // {
        //   name: "food2.jpeg",
        //   url:
        //     "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        // }
      ]
    };
  },
  created() {
    api.login();
  },
  methods: {
    postFile(file, fileList) {
      console.log("file", file);
      const upload = axios.create({
        baseURL: "",
        //这里配置你自己的url
        timeout: 5000,
        headers: {
          "Content-Type": "multipart/form-data" //请求头
        }
      });
      let formData = new FormData();
      formData.append("file", file);
      upload
        .post("/api/disk", formData)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      return false;
    },
    // myUpload(item) {
    //   console.log("item", item);
    //   const upload = axios.create({
    //     baseURL: "",
    //     //这里配置你自己的url
    //     timeout: 5000,
    //     headers: {
    //       "Content-Type": "multipart/form-data" //请求头
    //     }
    //   });
    //   let formData = new FormData();
    //   formData.append("file", item.file);
    //   upload
    //     .post("/api/disk", formData)
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
