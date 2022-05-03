import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Center, Divider, HStack, Link, Text, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import { FAQ_URL, FOOTER_HEIGHT } from "../App";
import { SocialLinks } from "./SocialLinks";

function TextDivider() {
    return <Divider orientation={"vertical"} borderColor={useColorModeValue("black", "white")} height={"20px"} />;
}

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue("gray.100", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Center>
                <HStack h={`${FOOTER_HEIGHT}px`} alignItems={"center"}>
                    <Link
                        href={FAQ_URL}
                        isExternal
                    >
                        <HStack>
                            <Text fontSize={"20"} fontWeight={"bold"}>FAQ</Text>
                            <ExternalLinkIcon boxSize={5} />
                        </HStack>
                    </Link>
                    <TextDivider />
                    <Text fontSize={"20"} fontWeight={"bold"}>Contact us:</Text>
                    <SocialLinks />
                </HStack>
            </Center>
        </Box>
    );
}
