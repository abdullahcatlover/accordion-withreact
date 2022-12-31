import './faq.styles.scss'
import {questions} from './data'
import DetailsFaq from './details-faq.comp';

const Faq =()=> {
    return (
        <section className='wrapper'>
            {questions.map((question) => {

                const {id, title, descr} = question
                return (
                    <DetailsFaq key={id} title={title} descr={descr}/>
                )
            })}
        </section>
    )
}


export default Faq;