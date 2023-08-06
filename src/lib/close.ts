export default function close(id: string, callBack: ((arg0: boolean) => void), currentState: boolean) {
    let ele = document.getElementById(id)
    ele!.classList.add('close-animation')

    setTimeout(() => {
        ele!.classList.remove('close-animation')
        callBack(!currentState)
    }, 900)
}