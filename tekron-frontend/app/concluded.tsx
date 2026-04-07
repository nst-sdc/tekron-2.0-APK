import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { PALETTE, SPACING, TYPOGRAPHY, GRADIENTS } from '../constants/theme';

const { width } = Dimensions.get('window');

const EVENTS = [
    { title: "Hackron", desc: "Agentic AI Hackathon 2.0 is a 24-hour offline hackathon" },
    { title: "CodeWars", desc: "Flagship competitive programming contest designed to challenge students" },
    { title: "Drone Havoc", desc: "An adrenaline-filled drone racing and obstacle navigation competition" },
    { title: "Robo Kick", desc: "Design and control robots to play soccer" },
    { title: "Throttle X", desc: "RC Cars Racing" },
    { title: "Sargam (Battle of Bands)", desc: "A high-energy live music competition designed to showcase the best emerging college bands" },
    { title: "BGMI", desc: "A high-stakes competitive esports event featuring a structured qualification pathway" },
    { title: "Last Goal Standing (FC24)", desc: "Last Goal Standing is a competitive FIFA 1v1 college tournament" },
    { title: "Robotics Workshop", desc: "Hands-on robotics workshop where you will learn to build and program your own robots" },
    { title: "Sector of Silence", desc: "Among Us Live - A high-intensity, real-world adaptation of the globally popular social deduction game" },
    { title: "Dil Jale", desc: "Speed Dating Event" },
    { title: "Live Concert & DJ Night", desc: "Experience an unforgettable evening featuring soulful melodies, versatile vocals, and high-energy EDM mixes" },
    { title: "Tech Panel Discussion", desc: "An insightful panel discussion with industry experts sharing their journey in AI, entrepreneurship, and leadership" }
];

export default function Concluded() {
    const insets = useSafeAreaInsets();

    const openWebsite = () => {
        Linking.openURL('https://tekronfest.com/');
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[PALETTE.primaryBlue, PALETTE.navyDark]}
                style={[styles.headerBackground, { paddingTop: insets.top + SPACING.l, paddingBottom: SPACING.xl }]}
            >
                <View style={styles.headerContent}>
                    <Text style={styles.appTitle}>TEKRON 2.0</Text>
                    <Text style={styles.appSubtitle}>The Ultimate Tech Showdown</Text>
                </View>
            </LinearGradient>

            <ScrollView 
                contentContainerStyle={styles.scrollContent} 
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="power-outline" size={48} color={PALETTE.primaryMint} />
                    </View>
                    <Text style={styles.title}>Event Concluded</Text>
                    <Text style={styles.message}>
                        Thank you for executing this protocol. TEKRON 2.0 has officially concluded. 
                        We appreciate all nodes who synchronized and made it a huge success.
                    </Text>

                    <TouchableOpacity 
                        style={styles.websiteButton} 
                        activeOpacity={0.8}
                        onPress={openWebsite}
                    >
                        <Text style={styles.btnText}>Visit tekronfest.com</Text>
                        <Ionicons name="arrow-forward-outline" size={18} color={PALETTE.white} style={{marginLeft: 8}} />
                    </TouchableOpacity>
                </View>

                <View style={styles.highlightsContainer}>
                    
                    <View style={styles.statsRow}>
                        <View style={styles.statColumn}>
                            <Text style={styles.statLabel}>COMPLETED EVENTS</Text>
                            <Text style={styles.statNumber}>13</Text>
                        </View>
                        <View style={styles.verticalDivider} />
                        <View style={styles.statColumn}>
                            <Text style={styles.statLabel}>PRIZE POOL</Text>
                            <Text style={[styles.statNumber, {color: PALETTE.primaryMint}]}>~4 LACS</Text>
                        </View>
                    </View>

                    <Text style={styles.eventsListTitle}>EVENT DIRECTORY</Text>
                    
                    <View style={styles.eventsList}>
                        {EVENTS.map((item, index) => {
                            const numStr = (index + 1).toString().padStart(2, '0');
                            return (
                                <View key={index} style={styles.eventRow}>
                                    <Text style={styles.eventIndex}>{numStr}</Text>
                                    <View style={styles.eventDetails}>
                                        <Text style={styles.eventTitle}>{item.title}</Text>
                                        <Text style={styles.eventDesc}>{item.desc}</Text>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PALETTE.bgSuperLight,
    },
    headerBackground: {
        alignItems: 'center',
        paddingHorizontal: SPACING.l,
    },
    headerContent: {
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 32,
        fontFamily: 'DMSans_700Bold',
        fontWeight: '900',
        color: PALETTE.white,
        letterSpacing: 2,
        marginBottom: 4,
    },
    appSubtitle: {
        fontFamily: 'DMSans_400Regular',
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
        letterSpacing: 1,
    },
    scrollContent: {
        paddingBottom: SPACING.xxl,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: SPACING.xl,
        paddingTop: SPACING.xl,
        paddingBottom: SPACING.xl,
    },
    iconContainer: {
        marginBottom: SPACING.m,
    },
    title: {
        fontFamily: 'DMSans_700Bold',
        fontSize: 28,
        color: PALETTE.navyDark,
        marginBottom: SPACING.s,
    },
    message: {
        fontFamily: 'DMSans_400Regular',
        fontSize: 15,
        color: PALETTE.darkGray,
        lineHeight: 24,
        marginBottom: SPACING.xl,
    },
    websiteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: PALETTE.navyDark,
        paddingHorizontal: SPACING.xl,
        paddingVertical: 14,
        borderRadius: 0, 
    },
    btnText: {
        fontFamily: 'DMSans_500Medium',
        color: PALETTE.white,
        fontSize: 15,
        letterSpacing: 1,
    },
    highlightsContainer: {
        paddingHorizontal: SPACING.xl,
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: PALETTE.mediumGray,
        paddingVertical: SPACING.l,
        marginBottom: SPACING.xxl,
    },
    statColumn: {
        flex: 1,
        alignItems: 'flex-start',
    },
    verticalDivider: {
        width: 1,
        height: '80%',
        backgroundColor: PALETTE.mediumGray,
        marginHorizontal: SPACING.l,
    },
    statLabel: {
        fontFamily: 'DMSans_500Medium',
        color: PALETTE.gray,
        fontSize: 12,
        marginBottom: SPACING.xs,
        letterSpacing: 0.5,
    },
    statNumber: {
        fontFamily: 'DMSans_700Bold',
        fontWeight: '900',
        fontSize: 32,
        color: PALETTE.navyDark,
    },
    eventsListTitle: {
        fontFamily: 'DMSans_500Medium',
        fontSize: 16,
        color: PALETTE.navyDark,
        marginBottom: SPACING.m,
        letterSpacing: 1,
    },
    eventsList: {
        borderTopWidth: 1,
        borderTopColor: PALETTE.mediumGray,
    },
    eventRow: {
        flexDirection: 'row',
        paddingVertical: SPACING.l,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.06)',
        alignItems: 'flex-start',
    },
    eventIndex: {
        fontFamily: 'DMSans_500Medium',
        fontSize: 16,
        color: PALETTE.primaryBlue,
        width: 40,
        marginTop: 2,
    },
    eventDetails: {
        flex: 1,
    },
    eventTitle: {
        fontFamily: 'DMSans_700Bold',
        fontSize: 17,
        color: PALETTE.navyDark,
        marginBottom: SPACING.xs,
    },
    eventDesc: {
        fontFamily: 'DMSans_400Regular',
        fontSize: 14,
        color: PALETTE.darkGray,
        lineHeight: 22,
    },
});
