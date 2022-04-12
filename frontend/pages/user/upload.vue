<template>
  <div id="uploadDrop">
    <center>
      <div class="columns is-centered">
        <div class="column">
          <b-field >
            <b-upload v-model="dropFiles" multiple drag-drop >
              <section class="section">
                <div class="content has-text-centered">
                  <p>
                    <b-icon icon="upload" size="is-large"> </b-icon>
                  </p>
                  <p>Drop your files here or click to upload</p>
                </div>
              </section>
            </b-upload>
          </b-field>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropFiles: [],
    }
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1)
    },
  },
}
</script>

<script>
// import Bar from "vue-chartjs"
export default {
  components: {
    // Bar,
  },
  layout: 'dashboard',
  data() {
    return {
      isActive: true,
    }
  },
}
</script>

<style>
body {
  background-color: #ecf0f5;
}

#uploadDrop {
    position: absolute;
    bottom: 500px;
    left: 50%;
}

#uploadField {
    width: 500px;
}

</style>