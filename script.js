function saveData() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let local = document.getElementById('local').value;

  const list = [{ email: email, name: name, local: local }];

  localStorage.setItem('@List', JSON.stringify(list));

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';

  alert('Cadastrado com sucesso!');
}
