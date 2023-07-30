import TokenContract from '../abi/TokenContract.json'
import VotingContract from '../abi/VotingContract.json'

export const tokenContractInstance = (web3) => {
    return new web3.eth.Contract(
        TokenContract.abi, // abi of SC voting token
        "0x246A40dba4633c668A7cd995c460829505c05BCD" // address of Voting token
    )
}

export const votingContractInstance = web3 => {
    return new web3.eth.Contract(
        VotingContract.abi, // abi of SC governance contract
    //    "0x3c66F21096E319e57380A41A64D974cCA565387a"  // always false;
        "0x8CD769e46cc3782FDD1d545980be9be02eac4d4c" //;
    )
}
