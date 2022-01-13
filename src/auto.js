const simpleGit = require('simple-git');
const { execSync } = require('child_process');

const git = simpleGit();
const MAX_COMMITS_PER_DAY = 2; // Max 1 commits per day (but randomized between 1 and 3)
const MAX_DAYS_PER_WEEK = 1; // Maximum number of days with commits in a week

// Date range: for example, the year 2023
const START_DATE = new Date('2022-01-11');
const END_DATE = new Date('2023-12-31');

async function makeCommitForDate(commitDate, numberOfCommits) {
    const formattedDate = commitDate.toISOString().split('T')[0];
    const commitMessage = `Commit for ${formattedDate}`;

    // Create or append to a file to commit
    execSync(`echo "${commitMessage}" >> dummy_commit.txt`);

    // Stage and commit with a custom date
    await git.add('./*');
    for (let i = 0; i < numberOfCommits; i++) {
        await git.commit(`${commitMessage} - Commit ${i + 1}`, {
            '--date': commitDate.toISOString(), // Set the commit date to the provided date
        });
    }
}

function getWeekNumber(date) {
    const firstJan = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - firstJan) / (24 * 60 * 60 * 1000));
    return Math.ceil((date.getDay() + 1 + days) / 7);
}

function getRandomDaysForWeek() {
    const daysOfWeek = [1, 2, 3, 4, 5]; // Monday to Friday
    const daysForCommit = [];

    const numberOfDays = Math.floor(Math.random() * MAX_DAYS_PER_WEEK) + 1; // Random days in a week (up to 3)

    while (daysForCommit.length < numberOfDays) {
        const randomDay = daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)];
        if (!daysForCommit.includes(randomDay)) {
            daysForCommit.push(randomDay); // Add unique random days for the week
        }
    }

    return daysForCommit;
}

async function automateCommits() {
    let currentDate = new Date(START_DATE);
    let currentWeek = getWeekNumber(currentDate);
    let randomDaysForWeek = getRandomDaysForWeek();

    while (currentDate <= END_DATE) {
        const weekNumber = getWeekNumber(currentDate);

        // Reset the week and generate new random days if a new week starts
        if (weekNumber !== currentWeek) {
            currentWeek = weekNumber;
            randomDaysForWeek = getRandomDaysForWeek(); // Get new random days for the new week
        }

        // Commit only on random selected days for the week
        const dayOfWeek = currentDate.getDay();
        if (randomDaysForWeek.includes(dayOfWeek)) {
            const numberOfCommits = Math.floor(Math.random() * MAX_COMMITS_PER_DAY) + 1; // Up to 3 commits

            await makeCommitForDate(currentDate, numberOfCommits);
        }

        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Push all commits to the repository
    await git.push('origin', 'main');
}

automateCommits()
    .then(() => console.log('Commits automation complete'))
    .catch(err => console.error('Error automating commits:', err));
