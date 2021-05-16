export default function Card(props) {
    const Img = ({img}) => img ? <img src={img} className="card-img-top" alt="img-card" /> : '';
    return (
        <div className="card">
            <Img img={props.img} />
            {props.children}
        </div>
    )
}