bot.on('message', msg => {
    //// Variables \\\\
    const args = msg.content.slice(prefix.length).trim().split(' ');

    let channelsMutedJson = editJsonFile('./channelsMuted.json');

    //// Admin Commands \\\\
    if(msg.content.startsWith(prefix + kickCmd)) {
        if(msg.member.roles.cache.find(r => r.id === adminID)) {
            msg.mentions.members.first().kick();
            log('<@' + msg.mentions.members.first() + '> was Kicked by <@' + msg.author.id + '>');
        } else {
            msg.channel.send('You do not have the permissions to do this command.');
            log('<@' + msg.author.id + '> Tried to kick <@' + msg.mentions.members.first() + '>');
            if(err) {
                msg.channel.send('Something went wrong, please check your command again and make sure you put it in right. If everything looks to be fine please contact a Dev.');
            }
        }
    }

    if(msg.content.startsWith(prefix + banCmd)) {
        if(msg.member.roles.cache.find(r => r.id === adminID)) {
            msg.mentions.members.first().ban();
            log('<@' + msg.mentions.members.first() + '> was Banned by <@' + msg.author.id + '>');
        } else {
            msg.channel.send('You do not have the permissions to do this command.');
            log('<@' + msg.author.id + '> Tried to kick <@' + msg.mentions.members.first() + '>');
            if(err) {
                msg.channel.send('Something went wrong, please check your command again and make sure you put it in right. If everything looks to be fine please contact a Dev.');
            }
        }
    }

    if(msg.content.startsWith(prefix + purgeCmd)) {
        if(msg.member.roles.cache.find(r => r.id === adminID)) {
            purgeNum = args[1];
            msg.channel.bulkDelete(purgeNum);
            log('<@' + msg.author.id + '> Deleted ' + purgeNum + ' from <#' + msg.channel.id + '>');
            msg.channel.send(purgeNum + ' deleted. [This message will delete in 5 seconds]')
            setTimeout(function() {msg.channel.bulkDelete(1)}, 5000)
            msg.channel.bulkDelete(1);
            
        } else {
            msg.channel.send('You do not have permissions to do this command.');
            log('<@' + msg.author.id + '> Tried to delete ' + purgeNum + ' from <#' + msg.channel.id + '>');
            if(err) {
                msg.channel.send('Something went wrong, please check your command again and make sure you put it in right. If everything looks to be fine please contact a Dev.');
            }
        }
    }

    if(msg.content.startsWith(prefix + muteChannelCmd)) {
        if(msg.member.roles.cache.find(r => r.id === adminID)) {
            if(channel1 !== msg.channel.id && channel2 !== msg.channel.id && channel3 !== msg.channel.id && channel4 !== msg.channel.id && channel5 !== msg.channel.id && channel6 !== msg.channel.id && channel7 !== msg.channel.id && channel8 !== msg.channel.id && channel9 !== msg.channel.id && channel10 !== msg.channel.id) {
                if(channel1 == 'None') {
                    channel1 = msg.channel.id;
                    channelLock(msg, channelsMutedJson);
                } else {
                    if(channel2 == 'None') {
                        channel2 = msg.channel.id;
                        channelLock(msg, channelsMutedJson);
                    } else {
                        if(channel3 == 'None') {
                            channel3 = msg.channel.id;
                            channelLock(msg, channelsMutedJson);
                        } else {
                            if(channel4 == 'None') {
                                channel4 = msg.channel.id;
                                channelLock(msg, channelsMutedJson);
                            } else {
                                if(channel5 == 'None') {
                                    channel5 = msg.channel.id;
                                    channelLock(msg, channelsMutedJson);
                                } else {
                                    if(channel6 == 'None') {
                                        channel6 = msg.channel.id;
                                        channelLock(msg, channelsMutedJson);
                                    } else {
                                        if(channel7 == 'None') {
                                            channel7 = msg.channel.id;
                                            channelLock(msg, channelsMutedJson);
                                        } else {
                                            if(channel8 == 'None') {
                                                channel8 = msg.channel.id;
                                                channelLock(msg, channelsMutedJson);
                                            } else {
                                                if(channel9 == 'None') {
                                                    channel9 = msg.channel.id;
                                                    channelLock(msg, channelsMutedJson);
                                                } else {
                                                    if(channel10 == 'None') {
                                                        channel10 = msg.channel.id;
                                                        channelLock(msg, channelsMutedJson);
                                                    } else {
                                                        msg.channel.send('All Filled');
                                                    }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        } else {
            msg.channel.send('Channel is already Locked');
        }
    }

    if(msg.content.startsWith(prefix + unmuteChannelCmd)) {
        if(msg.member.roles.cache.find(r => r.id === adminID)) {
            if(channel1 == msg.channel.id) {
                channel1 = 'None';
                msg.channel.updateOverwrite(msg.guild.roles.everyone.id, { SEND_MESSAGES: true });
                msg.channel.send('Channel has been unmuted.');
                log('<#' + msg.channel.id + '> was unmuted by <@' + msg.member.id + '>');
            } else {
                if(channel2 == msg.channel.id) {
                    channel2 = 'None';
                    msg.channel.updateOverwrite(msg.guild.roles.everyone.id, { SEND_MESSAGES: true });
                    msg.channel.send('Channel has been unmuted.');
                    log('<#' + msg.channel.id + '> was unmuted by <@' + msg.member.id + '>');
                } else {
                    if(channel3 == msg.channel.id) {
                        channel3 = 'None';
                        msg.channel.updateOverwrite(msg.guild.roles.everyone.id, { SEND_MESSAGES: true });
                        msg.channel.send('Channel has been unmuted.');
                        log('<#' + msg.channel.id + '> was unmuted by <@' + msg.member.id + '>');
                    } else {
                        if(channel4 == msg.channel.id) {
                            channel4 = 'None';
                            msg.channel.updateOverwrite(msg.guild.roles.everyone.id, { SEND_MESSAGES: true });
                            msg.channel.send('Channel has been unmuted.');
                            log('<#' + msg.channel.id + '> was unmuted by <@' + msg.member.id + '>');
                        } else {
                            if(channel5 == msg.channel.id) {
                                channel5 = 'None';
                                msg.channel.updateOverwrite(msg.guild.roles.everyone.id, { SEND_MESSAGES: true });
                                msg.channel.send('Channel has been unmuted.');
                                log('<#' + msg.channel.id + '> was unmuted by <@' + msg.member.id + '>');
                            } else {
                                if(channel6 == msg.channel.id) {
                                    channel6 = 'None';
                                    msg.channel.updateOverwrite(msg.guild.roles.everyone.id, { SEND_MESSAGES: true });
                                    msg.channel.send('Channel has been unmuted.');
                                    log('<#' + msg.channel.id + '> was unmuted by <@' + msg.member.id + '>');
                                } else {
                                    if(channel7 == msg.channel.id) {
                                        channel7 = 'None';
                                        msg.channel.updateOverwrite(msg.guild.roles.everyone.id, { SEND_MESSAGES: true });
                                        msg.channel.send('Channel has been unmuted.');
                                        log('<#' + msg.channel.id + '> was unmuted by <@' + msg.member.id + '>');
                                    } else {
                                        if(channel8 == msg.channel.id) {
                                            channel8 = 'None';
                                            msg.channel.updateOverwrite(msg.guild.roles.everyone.id, { SEND_MESSAGES: true });
                                            msg.channel.send('Channel has been unmuted.');
                                            log('<#' + msg.channel.id + '> was unmuted by <@' + msg.member.id + '>');
                                        } else {
                                            if(channel9 == msg.channel.id) {
                                                channel9 = 'None';
                                                msg.channel.updateOverwrite(msg.guild.roles.everyone.id, { SEND_MESSAGES: true });
                                                msg.channel.send('Channel has been unmuted.');
                                                log('<#' + msg.channel.id + '> was unmuted by <@' + msg.member.id + '>');
                                            } else {
                                                if(channel10 == msg.channel.id) {
                                                    channel10 = 'None';
                                                    msg.channel.updateOverwrite(msg.guild.roles.everyone.id, { SEND_MESSAGES: true });
                                                    msg.channel.send('Channel has been unmuted.');
                                                    log('<#' + msg.channel.id + '> was unmuted by <@' + msg.member.id + '>');
                                                } else {
                                                    msg.channel.send('Channel is not Muted.');
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    if(msg.content.startsWith(prefix + muteUserCmd)) {
        if(msg.member.roles.cache.find(r => r.id === adminID)) {
            if(msg.member.hasPermission('SEND_MESSAGES')) {
                msg.channel.updateOverwrite(msg.mentions.members.first(), { SEND_MESSAGES: true});
            } else {
                msg.channel.updateOverwrite(msg.mentions.members.first(), { SEND_MESSAGES: false});
            }
        }
    }

    if(msg.content.startsWith(prefix + embedCmd)) {
        if(msg.member.roles.cache.find(r => r.id === adminID)) {
            const embedMsg = new Discord.MessageEmbed()
                .setColor(logColor)
                .setTitle('Salient Bots')
                .setURL('https://google.com/')
                .setDescription(args.slice(1).join(' '));
            msg.channel.bulkDelete(1);
            msg.channel.send(embedMsg);
            log('<@' + msg.member.id + '> send a embed message saying ' + args.slice(1).join(' '));
        }
    }

    if(msg.content.startsWith(prefix + changeStatusCmd)) {
        if(msg.member.roles.cache.find(r => r.id === adminID)) {
            bot.user.setActivity(args.slice(1).join(' '), { type : "STREAMING", url : 'https://discord.gg/SuhsYNy5bh'});
        }
    }

    //// Logs \\\\

    // Message Logs \\
    if(msg.channel.id !== logChannelID) {
        if(msgLogs == true) {
            log('<@' + msg.member.id + '> send a message in <#' + msg.channel.id + '>\nMessage: ' + msg.content);
        }
    }
});