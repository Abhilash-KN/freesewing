import axios from 'axios'

const uploadDressDetails = (data, handleDialogDisplay) => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  axios
    .post('/dress-details', data, config)
    .then((response) => {
      handleDialogDisplay(false)
      if (response.data.success === true) {
        alert('The file is successfully uploaded')
      } else {
        alert(response.data.msg)
      }
    })
    .catch((error) => {
      console.log(error)
      handleDialogDisplay(false)
    })
}

const uploadOptionConfigs = (data, refreshDressDetails) => {
  axios
    .post('/option-configs', data)
    .then((response) => {
      if (response.data.success === true) {
        alert('Option configurations successfully saved in the database.')
        refreshDressDetails()
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

const fetchDressDetails = (packageName, callback) => {
  axios
    .get('/dress-details', {
      params: {
        package: packageName
      }
    })
    .then((response) => {
      if (response.data.success === true) {
        callback(response)
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

const updateDressDetails = (data, refreshDressDetails) => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  axios
    .patch('/dress-details', data, config)
    .then((response) => {
      if (response.data.success === true) {
        alert(`Dress details successfully updated in the database.`)
        refreshDressDetails()
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

const updateDraftImage = (data, refreshDressDetails) => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  axios
    .patch('/draft-image', data, config)
    .then((response) => {
      if (response.data.success === true) {
        alert(`Draft image successfully updated in the database.`)
        refreshDressDetails()
      } else {
        alert(response.data.msg)
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

export {
  uploadDressDetails,
  uploadOptionConfigs,
  updateDressDetails,
  fetchDressDetails,
  updateDraftImage
}
