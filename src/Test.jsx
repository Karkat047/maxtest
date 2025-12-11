import { Avatar, Button, Container, Flex, Grid, Panel, Typography } from "@maxhub/max-ui";


export const Test = ({userData, handleClose}) => (
	<Panel mode="secondary" className="panel">
		<Grid gap={12} cols={1}>
			<Container className="me">
				<Flex direction="column" align="center">
					<Avatar.Container size={72} form="squircle" className="me__avatar">
						<Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" />
					</Avatar.Container>

					<Typography.Title>{userData?.firstName}</Typography.Title>
					<Button size="large" onClick={handleClose}>Закрыть</Button>
				</Flex>
			</Container>
		</Grid>
	</Panel>
);