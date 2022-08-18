import { Carousel } from 'antd';

const items = [
    {
        img: 'https://static01.nyt.com/images/2020/09/08/fashion/08guitar-taylor-swift/08guitar-taylor-swift-mediumSquareAt3X-v2.jpg',
        content: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    },
    {
        img: 'https://static01.nyt.com/images/2020/09/08/fashion/08GUITAR-CLAPTON-SUB/08GUITAR-CLAPTON-SUB-superJumbo.jpg?quality=75&auto=webp',
        content: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    },
    {
        img: 'https://www.thebalancecareers.com/thmb/LYWZPJKVrWctWXeNIf1dGkkG6p4=/3744x3744/smart/filters:no_upscale()/germany--leipzig--business-people-shaking-hands--smiling-145167834-5acff31d642dca0036c9e2b1-c2527572069341a7a8164627a9939c2e.jpg',
        content: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    },
    {
        img: 'https://musicindustryhowtoimages.s3.amazonaws.com/wp-content/uploads/2017/08/12071129/band-jam-more.jpg',
        content: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    },
];

const CarouselComponent = () => {
    return (
        <Carousel autoplay autoplaySpeed={6000} effect={'scrollx'} speed={5000} >

            {items.map((item, index) => (
                <div key={index}>
                    <img src={item.img} alt={item.content} height="100px" />
                </div>

            ))}
        </Carousel>
    )
}

export default CarouselComponent;