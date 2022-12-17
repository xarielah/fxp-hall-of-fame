import { Box, Image, Flex, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const PreviewForum = ({ forum }) => {
    return (
        <Flex
            flexDirection={'column'}
            justify={'center'}
            align={'center'}
            mb={5}
            color={'white'}
            py={3}
            px={1}
            margin={'0 auto 2em'}
            borderRadius={'md'}
        >
            <Box>
                <Link target={'_blank'} href={forum.links.forum}>
                    <Image src={forum.logo} w='15rem' maxW={'100%'} />
                </Link>
            </Box>
            <Box>
                <Flex
                    gap={3}
                    flexDirection={{ base: 'column', sm: 'row' }}
                    align={'center'}
                    py={2}
                    px={4}
                    borderRadius={'full'}
                    bg={'blackAlpha.700'}
                >
                    {forum.links.menu.map((item) => (
                        <LinksMenuItem href={item.href} label={item.label} />
                    ))}
                </Flex>
            </Box>
        </Flex>
    );
};

const LinksMenuItem = (props) => {
    return (
        <Link
            mx={3}
            href={props.href}
            target={'_blank'}
            display={'flex'}
            alignItems={'center'}
        >
            {props.label} <ExternalLinkIcon ml={1} />
        </Link>
    );
};

export default PreviewForum;
