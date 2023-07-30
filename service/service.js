import TokenContract from '../abi/TokenContract.json'
import VotingContract from '../abi/VotingContract.json'

export const tokenContractInstance = (web3) => {
    return new web3.eth.Contract(
        TokenContract.abi, // abi of SC voting token
        "0xa9A459eB931ABADC5ba38DbcDA9c6DFf41F7BA37" // address of Voting token
    )
}

export const votingContractInstance = web3 => {
    return new web3.eth.Contract(
        VotingContract.abi, // abi of SC governance contract
    //    "0x3c66F21096E319e57380A41A64D974cCA565387a"  // always false;
        "0xe2b8A086e606bd2D41192C53eE9b69423fD88803" //;
    )
}