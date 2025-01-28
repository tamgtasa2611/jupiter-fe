import React from 'react';
import {
  Button,
  Card,
  Carousel,
  Typography,
  Row,
  Col,
  Input,
  Space,
} from 'antd';
import {
  ShoppingOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Home = () => {
  const carouselContent = [
    {
      title: 'Bộ Sưu Tập Mùa Hè Mới',
      description: 'Khám phá xu hướng thời trang mùa hè mới nhất',
      image:
        'https://enova.vn/wp-content/uploads/2023/04/t-shirt-with-logo-1.jpg',
    },
    {
      title: 'Ưu Đãi Mùa Đông Độc Quyền',
      description: 'Giảm giá lên đến 50% cho trang phục mùa đông',
      image:
        'https://enova.vn/wp-content/uploads/2023/04/t-shirt-with-logo-1.jpg',
    },
  ];

  const featuredCategories = [
    {
      title: 'Nữ',
      image:
        'https://enova.vn/wp-content/uploads/2023/04/t-shirt-with-logo-1.jpg',
    },
    {
      title: 'Nam',
      image:
        'https://enova.vn/wp-content/uploads/2023/04/t-shirt-with-logo-1.jpg',
    },
    {
      title: 'Phụ Kiện',
      image:
        'https://enova.vn/wp-content/uploads/2023/04/t-shirt-with-logo-1.jpg',
    },
  ];

  const newArrivals = [
    {
      title: 'Đầm Hoa',
      price: '2.090.000₫',
      image:
        'https://enova.vn/wp-content/uploads/2023/04/t-shirt-with-logo-1.jpg',
    },
    {
      title: 'Áo Khoác Jean',
      price: '3.090.000₫',
      image:
        'https://enova.vn/wp-content/uploads/2023/04/t-shirt-with-logo-1.jpg',
    },
    {
      title: 'Mũ Mùa Hè',
      price: '690.000₫',
      image:
        'https://enova.vn/wp-content/uploads/2023/04/t-shirt-with-logo-1.jpg',
    },
    {
      title: 'Túi Da',
      price: '3.790.000₫',
      image:
        'https://enova.vn/wp-content/uploads/2023/04/t-shirt-with-logo-1.jpg',
    },
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <Carousel autoplay style={{ height: '80vh' }}>
        {carouselContent.map((item, index) => (
          <div
            key={index}
            style={{
              height: '80vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'url(" + item.image + ")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div style={{ textAlign: 'center', color: 'white' }}>
              <Title level={1} style={{ color: 'white', marginBottom: 8 }}>
                {item.title}
              </Title>
              <Paragraph style={{ color: 'white', fontSize: 18 }}>
                {item.description}
              </Paragraph>
              <Button type="primary" size="large">
                Mua Ngay
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
      {/* Categories Section */}
      <div className="py-16 px-8">
        <Title level={2} className="text-center mb-12">
          Mua Sắm Theo Danh Mục
        </Title>
        <Row gutter={[24, 24]} justify="center">
          {featuredCategories.map((category, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <Card
                hoverable
                cover={<img alt={category.title} src={category.image} />}
                className="text-center"
              >
                <Title level={4}>{category.title}</Title>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      {/* New Arrivals Section */}
      <div className="bg-gray-50 py-16 px-8">
        <Title level={2} className="text-center mb-12">
          Sản Phẩm Mới
        </Title>
        <Row gutter={[24, 24]} justify="center">
          {newArrivals.map((item, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <Card
                hoverable
                cover={<img alt={item.title} src={item.image} />}
                className="text-center"
              >
                <Title level={4}>{item.title}</Title>
                <Paragraph strong>{item.price}</Paragraph>
                <Button type="primary">Thêm vào giỏ hàng</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      {/* Features Section */}
      <div className="py-16 px-8">
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={8}>
            <Card className="text-center">
              <ShoppingOutlined style={{ fontSize: 36, color: '#1890ff' }} />
              <Title level={4}>Miễn Phí Vận Chuyển</Title>
              <Paragraph>Cho đơn hàng trên 2.000.000₫</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card className="text-center">
              <RocketOutlined style={{ fontSize: 36, color: '#1890ff' }} />
              <Title level={4}>Giao Hàng Nhanh</Title>
              <Paragraph>Trong vòng 3-5 ngày làm việc</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card className="text-center">
              <SafetyCertificateOutlined
                style={{ fontSize: 36, color: '#1890ff' }}
              />
              <Title level={4}>Thanh Toán An Toàn</Title>
              <Paragraph>Bảo mật thanh toán 100%</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
      {/* Newsletter Section */}
      <div className="bg-gray-50 py-16 px-8 text-center">
        <Title level={2}>Đăng Ký Nhận Tin</Title>
        <Paragraph>Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt</Paragraph>
        <Space.Compact style={{ width: '100%', maxWidth: '500px' }}>
          <Input placeholder="Nhập email của bạn" />
          <Button type="primary">Đăng Ký</Button>
        </Space.Compact>
      </div>
    </div>
  );
};

export default Home;
