import React, { useState } from 'react'
import API from '../api/axios.config';

function Request() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const submitRequest = async (e) => {
        e.preventDefault();
        API
        .post("/gyms/request", {name: name, phone: phone})
        .then(res => alert("Заявка отправлена"))
        .catch(err => alert("Попробуйте еще раз"))
    }

  return (
    <div>
    <h1>Заявка</h1>
        <form onSubmit={submitRequest} className='flex flex-col space-y-2'>
        <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} placeholder='Ваше имя' />
        <input type="text" name="" id="" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Номер телефона' />
        <button type='submit'>Отправить заявку</button>
        </form>
    </div>
  )
}

export default Request