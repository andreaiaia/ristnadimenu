const toSave = {
    "lista": [
        {
            "nome": "gatto"
        },
        {
            "nome": "cane"
        }
    ]
}

const nuovo_animale = {
    "nome": "pesce"
}

const animali = JSON.parse(localStorage.getItem(key))

animali.lista.push(nuovo_animale)

localStorage.setItem(key, JSON.stringify(animali))