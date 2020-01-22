const context = String.raw `\[object Object\]|Object|Context|UserContext|Suite|fulfilled`;
const filepath = String.raw `(([A-Za-z]:\\)?.*?):.*`;
const regexString = String.raw `at (?:${context}) \(${filepath}\)`;
module.exports = {
    name: 'my-parser',
    parse(output) {
        const failedSpecs = new Set();
        const failedLines = new RegExp(regexString, 'g');
        let match = null;
        while ((match = failedLines.exec(output))) {
            if (!/node_modules/.test(match[1])) {
                failedSpecs.add(match[1].replace('src', 'js-files').replace('.ts', '.js'));
            }
        }
        return [...failedSpecs];
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktcGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL215LXBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFBLDhEQUE4RCxDQUFDO0FBQ3pGLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUEsd0JBQXdCLENBQUM7QUFDcEQsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQSxTQUFTLE9BQU8sT0FBTyxRQUFRLElBQUksQ0FBQztBQUVsRSxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2hCLElBQUksRUFBRSxXQUFXO0lBQ2pCLEtBQUssQ0FBQyxNQUFjO1FBQ25CLE1BQU0sV0FBVyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDOUIsTUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFFbkMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDM0U7U0FDRDtRQUNELE9BQU8sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Q0FDRCxDQUFDIn0=