import React from 'react';
import { Container, Divider, NomeJogador, Placar, ResetScore, StartGame, TextPlacar1, TextPlacar2, Time, TimeView, Title, ViewPlacar, ViewRow } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, View } from 'react-native';

export function Home() {
	Icon.loadFont();

	return (
		<Container>
			<TimeView>
				<ViewRow>
					<Icon name='alarm' size={20} color="#000000"/> 
					<Time>00:00</Time>
				</ViewRow>
			</TimeView>
			<Title>Semifinal do torneio</Title>
			<ViewRow style={{paddingHorizontal: '20%', justifyContent: 'space-between'}}>
				<Placar style={{width: '50%'}}>
					<NomeJogador>Windson</NomeJogador>
					<ViewRow style={{width: '100%'}}>
						<View style={{width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							<TextPlacar1>Games</TextPlacar1>
							<NomeJogador style={{fontSize: 30}}>00</NomeJogador>
						</View>
						<TextPlacar1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 80, width: '70%'}}>00</TextPlacar1>
					</ViewRow>
				</Placar>
				<Divider/> 
				<Placar style={{width: '50%'}}>
					<NomeJogador>Trinta</NomeJogador>
					<ViewRow style={{width: '100%'}}>
						<TextPlacar2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 80, width: '70%'}}>00</TextPlacar2>
						<View style={{width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							<TextPlacar2>Games</TextPlacar2>
							<NomeJogador style={{fontSize: 30}}>00</NomeJogador>
						</View>
					</ViewRow>
				</Placar>
			</ViewRow>
			
			<ResetScore>
				<ViewRow>
					<Icon name='restore' size={20} color="#000000"/>
					<Time>Voltar pontuação</Time>
				</ViewRow>
			</ResetScore>

			<View style={{width: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				<StartGame style={{padding: 20}}>
					<Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>Iniciar jogo</Text>
				</StartGame>
			</View>
			
		</Container>
	);
}
