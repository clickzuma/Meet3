function submitForm() {
  let name = document.getElementById('contactName').value;
  let email = document.getElementById('contactEmail').value;
  let phone = document.getElementById('phoneNumber').value;
  let subject = document.getElementById('contactSubject').value;
  let message = document.getElementById('contactMessage').value;

  if (name == '') {
    return alert('Diisi dong nama lu');
  } else if (email == '') {
    return alert('Email lu diisi juga!!');
  } else if (phone == '') {
    return alert('Ga punya hp lu??!');
  } else if (subject == '') {
    return alert('Tinggal pilih ya borjong!!');
  } else if (message == '') {
    return alert('TERSERAH LU DAH!!');
  }

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);

  let emailReceiver = 'goclickzuma@hotmail.com';

  let a = document.createElement('a');
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, saya ${name} ${message}`;
  a.click();
}
