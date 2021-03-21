import s from './Notification.module.css'

export default function Notification({ alert }) {
   return (
            <div className={s.thumb}>
                <p className={s.text}>{alert}</p>
            </div>
        ) 
}

/* class Notification extends Component {
    render() {
        return (
            <div className={s.thumb}>
                <p className={s.text}>{this.props.alert}</p>
            </div>
        )
    }
} 

export default Notification; */