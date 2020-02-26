# Pathfinder 2e Wild Shape Helper

An online resource to help with the stats adjustments when using Wild Shape in Pathfinder 2e. Using Wild Shape in Pathfinder Second Edition comes with a lot of adjustments to various character stats, and so the intent of the project is to allow you to enter your characters attributes modifiers, their level, their chosen feats, and any other relevant bonuses, and to see a list of available forms and their relevant combat statistics, movements speeds, and so on.

- Language: JavaScript
- Testing: Jasmine

Created under the [Open Game License](https://paizo.com/pathfinder/compatibility/ogl) as it pertains to Pathfinder 2e. 

I'm interested in getting help from other developers to finish this. 

Next steps (and learning for me):

The basicUnarmedAttack variable should be the total of the strength modifier, level, and proficiency, and should should change on-screen as any of those are changed. I think the issue I'm having with getting this done is to do with scope, as the definition of each bit is in a different file. 

Firstly I need it to work in the code, and then afterwards I can figure out how to have it displayed on screen. 

After that, we can move on to including basic damage stats, and then print up the list of available Wild Shapes. The final goal is for a player to enter their details, and see a stat line that's based on their Wild Shape choice. Ideally I'd like it to be filtered by level (so only showing available Wild Shape choices dependent on the level entered), and to have a visual indication as to whether using the Basic Unarmed Bonus or the Wild Shape attack bonus would be better. 
