import { Container, Flex, Link, Text } from '@chakra-ui/react';
import bg from '../../images/bg.jpg';
import forum from '../../data/forum';
import AnimationWrapper from './animation';
import ContentAnimation from './contentAnimation';
import PreviewForum from '../stages/PreviewForum';

const MainLayout = ({ children }) => {
    return (
        <Flex
            flexDirection='column'
            h='100vh'
            justify='center'
            align='center'
            as='main'
            style={{
                backgroundImage: `url('${bg}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <AnimationWrapper>
                <Container
                    maxW={{ base: '90%', md: '50ch' }}
                    w={'100vw'}
                    mb={{ base: 0, md: 14 }}
                    py={10}
                    border={'1px solid #fafafa55'}
                    borderRadius={'md'}
                    bg={'#fafafa22'}
                    boxShadow={'0 0 30px #33333322'}
                    backdropFilter={'blur(3px)'}
                >
                    <PreviewForum forum={forum} />
                    <ContentAnimation>{children}</ContentAnimation>

                    <Text textAlign={'center'} mt={5} mb={-5} opacity={0.7}>
                        הכלי נוצר על ידי{' '}
                        <Link
                            color={'blue'}
                            fontWeight={'bold'}
                            href={'https://www.fxp.co.il/member.php?u=749522'}
                            target={'_blank'}
                            _hover={{ textDecoration: 'none' }}
                        >
                            Middleware
                        </Link>
                    </Text>
                </Container>
            </AnimationWrapper>
        </Flex>
    );
};

export default MainLayout;
