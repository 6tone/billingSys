let formCount = 1
function addForm () {
  let formDiv = document.querySelector('#form__group__zone')
  formDiv.innerHTML(`
  <div class="input-group mb-3 form__group">
    <select class="form-select" aria-label="Default select example" name="postForm[${formCount}].urlStr">
      <option selected>選擇網址</option>
      <option value="https://mail.558bf.net">https://mail.558bf.net</option>
    </select>
    <input type="text" class="form-control" aria-label="Text input with dropdown button" name="postForm[${formCount}].acc" placeholder="帳號">
    <input type="text" class="form-control" aria-label="Text input with dropdown button" name="postForm[${formCount}].pwd" placeholder="密碼">
  </div>`)
  formCount++
}

function addForm () {
  let formDiv = document.querySelector('#form__group__zone')
  console.log('formDiv', formDiv)
  $("#form__group__zone").append(`
  <div class="input-group mb-3 form__group">
    <select class="form-select" aria-label="Default select example" name="postForm[${formCount}][urlStr]">
      <option selected>選擇網址</option>
      <option value="https://mail.558bf.net">https://mail.558bf.net</option>
    </select>
    <input type="text" class="form-control" aria-label="Text input with dropdown button" name="postForm[${formCount}][acc]" placeholder="帳號">
    <input type="text" class="form-control" aria-label="Text input with dropdown button" name="postForm[${formCount}][pwd]" placeholder="密碼">
  </div>`);
  // formDiv.appendChild(`
  // <div class="input-group mb-3 form__group">
  //   <select class="form-select" aria-label="Default select example" name="postForm[${formCount}].urlStr">
  //     <option selected>選擇網址</option>
  //     <option value="https://mail.558bf.net">https://mail.558bf.net</option>
  //   </select>
  //   <input type="text" class="form-control" aria-label="Text input with dropdown button" name="postForm[${formCount}].acc" placeholder="帳號">
  //   <input type="text" class="form-control" aria-label="Text input with dropdown button" name="postForm[${formCount}].pwd" placeholder="密碼">
  // </div>`)
  formCount++
}