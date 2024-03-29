# Leetcode-DriverCodeGenerator
- Leetcode Driver Code Generator

# Tests
```json
{
  '1': {
    '1': {
      input: 'Input: s = "aAbBcC"\n' +
        'Output: 2\n' +
        'Explanation: \n' +
        "From s[0] = 'a' to s[1] = 'A', there is no change of key as caps lock or shift is not counted.\n" +
        "From s[1] = 'A' to s[2] = 'b', there is a change of key.\n" +
        "From s[2] = 'b' to s[3] = 'B', there is no change of key as caps lock or shift is not counted.\n" +
        "From s[3] = 'B' to s[4] = 'c', there is a change of key.\n" +
        "From s[4] = 'c' to s[5] = 'C', there is no change of key as caps lock or shift is not counted.",
      templatefunc: 'int countKeyChanges(string s) {}'
    },
    '2': {
      input: 'Input: s = "AaAaAaaA"\n' +
        'Output: 0\n' +
        "Explanation: There is no change of key since only the letters 'a' and 'A' are pressed which does not require change of key.",
      templatefunc: 'int countKeyChanges(string s) {}'
    },
    output: 'struct testcase {\n' +
      '    string s1;\n' +
      '};\n' +
      '\n' +
      'vector<testcase> testcases;\n' +
      'testcases.push_back(testcase{"aAbBcC"});\n' +
      'testcases.push_back(testcase{"AaAaAaaA"});\n' +
      '\n' +
      'for (auto &t : testcases) {\n' +
      "    cout << countKeyChanges(t.s1) << '\\n';\n" +
      '}\n'
  },
  '2': {
    '1': {
      input: 'Input: nums = [5,4,1,2,2]\n' +
        'Output: 3\n' +
        'Explanation: We can select the subset {4,2,2}, which can be placed in the array as [2,4,2] which follows the pattern and 22 == 4. Hence the answer is 3.',
      templatefunc: 'int maximumLength(vector<int>& nums) {}'
    },
    '2': {
      input: 'Input: nums = [1,3,2,4]\n' +
        'Output: 1\n' +
        'Explanation: We can select the subset {1}, which can be placed in the array as [1] which follows the pattern. Hence the answer is 1. Note that we could have also selected the subsets {2}, {3}, or {4}, there may be multiple subsets which provide the same answer. ',
      templatefunc: 'int maximumLength(vector<int>& nums) {}'
    },
    output: 'struct testcase {\n' +
      '    vector<int> nums1;\n' +
      '};\n' +
      '\n' +
      'vector<testcase> testcases;\n' +
      'testcases.push_back(testcase{{5,4,1,2,2}});\n' +
      'testcases.push_back(testcase{{1,3,2,4}});\n' +
      '\n' +
      'for (auto &t : testcases) {\n' +
      "    cout << maximumLength(t.nums1) << '\\n';\n" +
      '}\n'
  },
  '3': {
    '1': {
      input: 'Input: nums = [2,3,-5]\n' +
        'Output: 1\n' +
        'Explanation: After the first step, the ant is 2 steps to the right of the boundary.\n' +
        'After the second step, the ant is 5 steps to the right of the boundary.\n' +
        'After the third step, the ant is on the boundary.\n' +
        'So the answer is 1.',
      templatefunc: 'int returnToBoundaryCount(vector<int>& nums) {}'
    },
    '2': {
      input: 'Input: nums = [3,2,-3,-4]\n' +
        'Output: 0\n' +
        'Explanation: After the first step, the ant is 3 steps to the right of the boundary.\n' +
        'After the second step, the ant is 5 steps to the right of the boundary.\n' +
        'After the third step, the ant is 2 steps to the right of the boundary.\n' +
        'After the fourth step, the ant is 2 steps to the left of the boundary.\n' +
        'The ant never returned to the boundary, so the answer is 0.',
      templatefunc: 'int returnToBoundaryCount(vector<int>& nums) {}'
    },
    output: 'struct testcase {\n' +
      '    vector<int> nums1;\n' +
      '};\n' +
      '\n' +
      'vector<testcase> testcases;\n' +
      'testcases.push_back(testcase{{2,3,-5}});\n' +
      'testcases.push_back(testcase{{3,2,-3,-4}});\n' +
      '\n' +
      'for (auto &t : testcases) {\n' +
      "    cout << returnToBoundaryCount(t.nums1) << '\\n';\n" +
      '}\n'
  },
  '4': {
    '1': {
      input: 'Input: image = [[5,6,7,10],[8,9,10,10],[11,12,13,10]], threshold = 3\n' +
        'Output: [[9,9,9,9],[9,9,9,9],[9,9,9,9]]\n' +
        'Explanation: There exist two regions in the image, which are shown as the shaded areas in the picture. The average intensity of the first region is 9, while the average intensity of the second region is 9.67 which is rounded down to 9. The average intensity of both of the regions is (9 + 9) / 2 = 9. As all the pixels belong to either region 1, region 2, or both of them, the intensity of every pixel in the result is 9. \n' +
        'Please note that the rounded-down values are used when calculating the average of multiple regions, hence the calculation is done using 9 as the average intensity of region 2, not 9.67.',
      templatefunc: 'vector<vector<int>> resultGrid(vector<vector<int>>& image, int threshold) {}'
    },
    '2': {
      input: 'Input: image = [[10,20,30],[15,25,35],[20,30,40],[25,35,45]], threshold = 12\n' +
        'Output: [[25,25,25],[27,27,27],[27,27,27],[30,30,30]]\n' +
        'Explanation: There exist two regions in the image, which are shown as the shaded areas in the picture. The average intensity of the first region is 25, while the average intensity of the second region is 30. The average intensity of both of the regions is (25 + 30) / 2 = 27.5 which is rounded down to 27. All the pixels in row 0 of the image belong to region 1, hence all the pixels in row 0 in the result are 25. Similarly, all the pixels in row 3 in the result are 30. The pixels in rows 1 and 2 of the image belong to region 1 and region 2, hence their assigned value is 27 in the result.',
      templatefunc: 'vector<vector<int>> resultGrid(vector<vector<int>>& image, int threshold) {}'
    },
    '3': {
      input: 'Input: image = [[5,6,7],[8,9,10],[11,12,13]], threshold = 1\n' +
        'Output: [[5,6,7],[8,9,10],[11,12,13]]\n' +
        'Explanation: There does not exist any region in image, hence result[i][j] == image[i][j] for all the pixels.',
      templatefunc: 'vector<vector<int>> resultGrid(vector<vector<int>>& image, int threshold) {}'
    },
    output: 'struct testcase {\n' +
      '    vector<vector<int>> image1;\n' +
      '    int threshold1;\n' +
      '};\n' +
      '\n' +
      'vector<testcase> testcases;\n' +
      'testcases.push_back(testcase{{{5,6,7,10},{8,9,10,10},{11,12,13,10}}, 3});\n' +
      'testcases.push_back(testcase{{{10,20,30},{15,25,35},{20,30,40},{25,35,45}}, 12});\n' +
      'testcases.push_back(testcase{{{5,6,7},{8,9,10},{11,12,13}}, 1});\n' +
      '\n' +
      'for (auto &t : testcases) {\n' +
      '    auto result = resultGrid(t.image1, t.threshold1);\n' +
      '    for (const auto& row : result) {\n' +
      '        for (int val : row) {\n' +
      '            cout << val << " ";\n' +
      '        }\n' +
      '        cout << endl;\n' +
      '    }\n' +
      '    cout << endl;\n' +
      '}\n'
  }
}
```
