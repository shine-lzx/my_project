class Info {
  constructor (data) {
    this.init(data)
  }
  init (data) {
    console.log('init', data)
  }

  setName (data) {
    console.log('setName', data)
  }

  setHobby (data) {
    console.log('hobby', data)
  }
}

class Shine extends Info {
  static Desc = {
    sex: 'man'
  }
  constructor (data) {
    super(data)
    this.setHobby(data)
    this.setName(data)
  }
}

class Xyz extends Info {
  static Desc = {
    sex: 'woman'
  }
  constructor (data) {
    super(data)
    this.setHobby(data)
    this.setName(data)
  }
}

export default { Info, Shine, Xyz }