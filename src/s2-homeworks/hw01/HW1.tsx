import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number,
    user:  {avatar: string; name: string}
    message: {text: string; time: string}
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: 'https://th.bing.com/th/id/R.99d0eecb6545c7e1995a6f96e5d9dd06?rik=ayflvZrTpkuczQ&pid=ImgRaw&r=0', // можно менять
        name: 'Jon Snow',  // можно менять
    },
    message: {
        text: 'Hello, winter is coming', // можно менять
        time: '11:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: 'https://aws.glamour.es/prod/designs/v1/assets/1000x1000/478414.jpeg', // можно менять
        name: 'Ygritte But', // можно менять
    },
    message: {
        text: 'You know nothing, Jon Snow', // можно менять
        time: '12:00', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
