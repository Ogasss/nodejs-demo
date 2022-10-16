getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','style.css')

    request.onload = () =>{
        console.log('成功')
        console.log(request.response)

        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    request.onerror = () =>{
        console.log('失败')
    }

    request.send()
}//Ajax接受css

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','test.js')

    request.onload = () =>{
        console.log('成功')

        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () =>{
        console.log('失败')
    }

    request.send()
}//Ajax接受js


getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','page.html')// readyState = 1

    request.onreadystatechange = () => {
        if(request.readyState === 4){
            console.log('加载完成')
            //当readyState === 4时，获取的request.response才是完整的
            console.log(request.status)
            if(request.status >=200 && request.status <300){
                console.log('开始操作')
                //在监听完readyState，后，还需要监听request.status是否在成功区间
                //当request.status为4开头时，readyState也是4
                console.log('成功')
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            }else{
                console.log('失败')
            }
        }
    }

    request.send()
}//Ajax接受html

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','test.xml')

    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <300){
                console.log('成功')
                // console.log(request.responseXML)
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }else{
                console.log('失败')
            }
        }
    } 

    request.send()
}//Ajax接受xml

getJSON.onclick  = () => {
    const request = new XMLHttpRequest()
    request.open('GET','test.json')

    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <300){
                console.log('成功')
                // console.log(request.response)
                const object = JSON.parse(request.response)
                console.log(object)
                username.textContent = object.name
            }else{
                console.log('失败')
            }
        }
    }

    request.send()
}

let n = 1
getPage.onclick  = () => {
    const request = new XMLHttpRequest()
    request.open('GET',`page${n+1}.json`)

    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <300){
                console.log('成功')
                const array = JSON.parse(request.response)
                array.forEach(item =>{
                    const li = document.createElement('li')
                    li.textContent = item.data
                    list.appendChild(li)
                })
                n += 1
            }else{
                console.log('失败')
            }
        }
    }

    request.send()
}
