var Parser = require('rpgparser-data');

var drives = {
  'contempt': {
    description: 'Offend an NPC of importance with your brutish ways.'
  },
  'gigantic_melancholy': {
    description: 'Let a problem escalate while you brood, drown your sorrows, or express your disgust.'
  },
  gigantic_mirth: {
    description: 'Cause trouble for your allies by indulging in revelry, romance, or celebration.'
  },
  honor: {
    description: 'Keep an oath that you have made to an NPC.'
  },
  pride: {
    description: 'Refuse an order or request that is beneath you.'
  },
  traditional: {
    description: 'Eschew a convention of the civilized world'
  },
  caring: {
    description: 'Teach someone the ways of your people.'
  },
  challenge: {
    description: 'Provoke a fight with a notable enemy, just you and them.'
  },
  glory: {
    description: 'Show off in front of NPCs who can go on to tell your tale.'
  }, 
  peace: {
    description: 'Settle a dispute or end a fight without bloodshed.'
  },
  pride: {
    description: 'Put someone in their place (or their grave) for disrespecting you.'
  },
  vengeance: {
    description: 'Avenge a wrong or hurt done to you or your allies.'
  },
  duty: {
    description: 'Defend those weaker than you.'
  },
  victory: {
    description: 'Defeat a worthy opponent.'
  },
  carnage: {
    description: 'Kill a defenseless or surrendered enemy.'
  }
}

drives = Parser.helpers.completeObjects(drives);
console.log('drives fff', drives);

var driveLists = [
  {
    name: 'Barbarian / Berserker / Warrior',
    drives: {
      points_to: 'drives',
      list: ['contempt', 'gigantic_melancholy', 'gigantic_mirth', 'honor', 'pride', 'traditional', 'caring']
    },
    classes: ['barbarian', 'berserker', 'warrior']
  }, {
    name: 'Fighter / Brawler / Mercenary',
    drives: {
      points_to: 'drives',
      list: ['challenge', 'glory', 'peace', 'pride', 'vengeance', 'duty', 'victory', 'carnage']
    },
    classes: ['fighter', 'brawler', 'mercenary']
  }
];
/*
FERVOR: Spread a dangerous new idea.
'HUNGER': ' Wantonly consume a limited resource'.
'PROVOCATION': 'Spur another into unplanned decisive'
action.
'VEHEMENCE': ' Sacrifice an unwilling victim to the flames'.
'EXUBERANCE': 'Cause widespread destruction or'
collateral damage.
'KINDLING': ' Exchange a sacrifice', freely given, for a
service rendered.
'COURAGE': ' Lead another to act despite fear or doubt'.
'DOUBT': ' Question the tenets of your faith', the law, or
your order.
'MERCY': ' Forgive a helpless enemy and set them free'.
'JUSTICE': ' Capture or punish a criminal or evildoer'.
'SACRIFICE': 'Suffer pain and hardship so that someone'
does not need to.
'WRATH': ' Deny mercy to a criminal or unbeliever'.
'SERVICE': 'Endanger yourself to protect someone'
weaker than you..
'COMPANIONSHIP': 'Alienate someone by putting your'
animal companion’s desires above theirs.
THE 'HUNT': 'Slay a creature of considerable might or'
cunning.
'LIBERTY': ' Free someone from bondage', figuratively or
literally.
'TENACITY': ' Doggedly pursue a course of action', to your
or your allies detriment.
'WONDER': 'Show someone a place or thing of natural'
beauty that they have not seen before.
'CHAOTIC': Free someone from literal or figurative
bonds.
'GOOD': 'Endanger yourself to combat an unnatural'
threat.
'NEUTRAL': ' Help an animal or spirit of the wild'.
'FAME': 'Ensure that others will spread word of your name'
or deeds.
'DRAMA': ' Provoke conflict between others'.
'ROMANCE': ' Share a passionate moment with another'.
'WISDOM': ' An NPC acts on your advice'.
'WONDER': ' Expose someone else to a thing of beauty',
majesty, or awe.
'BENEVOLENCE': ' Perform your art to aid someone else'.
'TRANQUILITY': 'Avoid a conflict or defuse a tense'
situation.
'PASSION': 'Spur others to significant and unplanned'
decisive action.
'AMBITION': 'Gain recognition from or hold a debt over'
an NPC of importance.
'CHARITY': ' Bring relief to an NPC who is suffering'.
'EVANGELISM': 'Instruct an NPC in the tenets of your'
faith.
'INQUISITION': 'Reveal the failings or falsehoods of'
another.
'ORTHODOXY': ' Start trouble '(for yourself or others) by
adhering strictly to doctrine.
'BLESSING': ' Endanger yourself to heal another'.
'WRATHFUL': 'Harm another to prove the superiority of'
your church or god.
'CULTIVATION': ' Help an NPC learn', grow, or improve
themselves.
'DETACHMENT': ' Act '(or refuse to do so) in a way that
harms an ally or bystander.
'HERITAGE': 'Unnerve another with your strange ways'
and stranger rites.
'PRESERVATION': 'Convince others to protect something'
of the natural world.
'RESTORATION': ' Deface', destroy, or bury a symbol or
artifice of civilization.
'BALANCE': ' Eliminate an unnatural menace'.
*/

module.exports = {
  drives: drives,
  lists: driveLists
}