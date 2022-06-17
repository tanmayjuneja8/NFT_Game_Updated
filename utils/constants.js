import contractJson from 'utils/abis/MyEpicGame.json'

const CONTRACT = {
  MY_EPIC_GAME: {
    ADDRESS: '0x33349dFfdf22E85Fff96b9911B385C99EAFcB2FD',
    ABI: contractJson.abi
  }
}

export const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
    shield: characterData.shield.toNumber()
  }
}

export const transformBossData = (bossData) => {
  return {
    name: bossData.name,
    imageURI: bossData.imageURI,
    hp: bossData.hp.toNumber(),
    maxHp: bossData.maxHp.toNumber(),
    attackDamage: bossData.attackDamage.toNumber()
  }
}

export default CONTRACT
