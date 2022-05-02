import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-interactive-player',
  templateUrl: './interactive-player.component.html',
  styleUrls: ['./interactive-player.component.scss']
})
export class InteractivePlayerComponent implements OnInit {

  constructor() { }
  value: any;
  playerConfig = {
    context: {
        mode: 'play',
        partner: [],
        pdata: {
            id: 'staging.sunbird.portal',
            ver: '4.9.0',
            pid: 'sunbird-portal'
        },
        contentId: 'do_21307658760941568014995',
        sid: 'HVD9Asc_xdrNyAq0Pc8F1XFqoX0yWrNF',
        uid: '08631a74-4b94-4cf7-a818-831135248a4a',
        channel: '01269878797503692810',
        did: '8c8786085919a8432cc54929c618bcdc',
        userData: {
            firstName: 'Gourav',
            lastName: 'More'
        }
    },
    config: {
      whiteListUrl:  ['self',
      'https://*.blob.core.windows.net/**',
      'https://ekstep-public-*.s3-ap-south-1.amazonaws.com/**',
      'https://staging.sunbirded.org/**'
    ],
        showEndPage: false,
        showStartPage: true,
        host: '',
        overlay: {
            showUser: false
        },
        splash: {
            text: '',
            icon: '',
            bgImage: 'assets/icons/splacebackground_1.png',
            webLink: ''
        },
        apislug: '/action',
        repos: [
            'https://staging.sunbirded.org/content-plugins'
        ],
        plugins: [
            {
                id: 'org.sunbird.iframeEvent',
                ver: 1,
                type: 'plugin'
            },
            {
                id: 'org.sunbird.player.endpage',
                ver: 1.1,
                type: 'plugin'
            }
        ],
        enableTelemetryValidation: false
    },
    metadata: {
        mimeType: 'application/vnd.ekstep.ecml-archive',
        appIcon: 'https://ekstep-public-prod.s3-ap-south-1.amazonaws.com/content/do_31221747506266112015087/artifact/question_block_1491391028759.png',
        primaryCategory: 'Practice Question Set',
        artifactUrl: 'https://sunbirdstagingpublic.blob.core.windows.net/sunbird-content-staging/content/do_21307658760941568014995/artifact/1596270093465_do_21307658760941568014995.zip',
        contentType: 'PracticeResource',
        identifier: 'do_21307658760941568014995',
        mediaType: 'content',
        osId: 'org.ekstep.quiz.app',
        name: 'Light – Refraction of Light',
        status: 'Live',
        totalQuestions: 2,
        description: 'Enter description for Resource',
        streamingUrl: 'https://sunbirdstagingpublic.blob.core.windows.net/sunbird-content-staging/content/ecml/do_21307658760941568014995-latest',
        creator: 'content creator',
        totalScore: 2,
        pkgVersion: 2
    },
    data: ' {"theme":{"id":"theme","version":"1.0","startStage":"c7b2ca6a-0d82-41e0-8bba-5d51c4b7e0c2","stage":[{"x":0,"y":0,"w":100,"h":100,"id":"c7b2ca6a-0d82-41e0-8bba-5d51c4b7e0c2","rotate":null,"config":{"__cdata":"{\\"opacity\\":100,\\"strokeWidth\\":1,\\"stroke\\":\\"rgba(255, 255, 255, 0)\\",\\"autoplay\\":false,\\"visible\\":true,\\"color\\":\\"#FFFFFF\\",\\"genieControls\\":false,\\"instructions\\":\\"\\"}"},"param":[{"name":"next","value":"e474d0de-22e9-417b-b4e6-3e759760325b"}],"manifest":{"media":[]},"org.ekstep.text":[{"x":22.08,"y":43.7,"minWidth":20,"w":56.63,"maxWidth":500,"fill":"#000000","fontStyle":"normal","fontWeight":"normal","stroke":"rgba(255, 255, 255, 0)","strokeWidth":1,"opacity":1,"editable":false,"version":"V2","offsetY":0.2,"h":7.25,"rotate":0,"textType":"text","lineHeight":1,"z-index":0,"color":"#9900ff","font":"\'Noto Sans\', \'Noto Sans Bengali\', \'Noto Sans Malayalam\', \'Noto Sans Gurmukhi\', \'Noto Sans Devanagari\', \'Noto Sans Gujarati\', \'Noto Sans Telugu\', \'Noto Sans Tamil\', \'Noto Sans Kannada\', \'Noto Sans Oriya\', \'Noto Nastaliq Urdu\', -apple-system, BlinkMacSystemFont, Roboto, Oxygen-Sans, Ubuntu, Cantarell, \'Helvetica Neue\'","fontsize":69.33,"weight":"bold","id":"6aae8672-6484-4ac7-b483-b684e9acae4c","config":{"__cdata":"{\\"opacity\\":100,\\"strokeWidth\\":1,\\"stroke\\":\\"rgba(255, 255, 255, 0)\\",\\"autoplay\\":false,\\"visible\\":true,\\"text\\":\\"Light – Refraction of Light: MCQs\\",\\"color\\":\\"#9900ff\\",\\"fontfamily\\":\\"\'Noto Sans\', \'Noto Sans Bengali\', \'Noto Sans Malayalam\', \'Noto Sans Gurmukhi\', \'Noto Sans Devanagari\', \'Noto Sans Gujarati\', \'Noto Sans Telugu\', \'Noto Sans Tamil\', \'Noto Sans Kannada\', \'Noto Sans Oriya\', \'Noto Nastaliq Urdu\', -apple-system, BlinkMacSystemFont, Roboto, Oxygen-Sans, Ubuntu, Cantarell, \'Helvetica Neue\'\\",\\"fontsize\\":26,\\"fontweight\\":true,\\"fontstyle\\":false,\\"align\\":\\"left\\",\\"textcolor\\":\\"#9900ff\\"}"}}]},{"x":0,"y":0,"w":100,"h":100,"id":"e474d0de-22e9-417b-b4e6-3e759760325b","rotate":null,"config":{"__cdata":"{\\"opacity\\":100,\\"strokeWidth\\":1,\\"stroke\\":\\"rgba(255, 255, 255, 0)\\",\\"autoplay\\":false,\\"visible\\":true,\\"color\\":\\"#FFFFFF\\",\\"genieControls\\":false,\\"instructions\\":\\"\\"}"},"param":[{"name":"previous","value":"c7b2ca6a-0d82-41e0-8bba-5d51c4b7e0c2"}],"manifest":{"media":[]},"org.ekstep.questionset":[{"x":9,"y":6,"w":80,"h":85,"rotate":0,"z-index":0,"id":"a15c4b70-747e-46e6-8ad7-aa4e94ce1554","org.ekstep.question":[{"id":"do_2130765931322572801228","type":"mcq","pluginId":"org.ekstep.questionunit.mcq","pluginVer":"1.3","templateId":"horizontalMCQ","data":{"__cdata":"{\\"question\\":{\\"text\\":\\"<p style=\'font-size:1.285em;\'>Can an index of refraction be less than 1?</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"hint\\":\\"\\"},\\"options\\":[{\\"text\\":\\"<p style=\'font-size:1.285em;\'>yes</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"isCorrect\\":true,\\"$$hashKey\\":\\"object:1265\\"},{\\"text\\":\\"<p style=\'font-size:1.285em;\'>no</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"isCorrect\\":false,\\"$$hashKey\\":\\"object:1270\\"}],\\"questionCount\\":0,\\"media\\":[]}"},"config":{"__cdata":"{\\"metadata\\":{\\"data\\":{\\"plugin\\":{\\"id\\":\\"org.ekstep.questionunit.mcq\\",\\"version\\":\\"1.3\\",\\"templateId\\":\\"horizontalMCQ\\"},\\"data\\":{\\"question\\":{\\"text\\":\\"<p>Can an index of refraction be less than 1?</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"hint\\":\\"\\"},\\"options\\":[{\\"text\\":\\"<p>yes</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"isCorrect\\":true,\\"$$hashKey\\":\\"object:1265\\"},{\\"text\\":\\"<p>no</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"isCorrect\\":false,\\"$$hashKey\\":\\"object:1270\\"}],\\"questionCount\\":0,\\"media\\":[]},\\"config\\":{\\"metadata\\":{\\"max_score\\":1,\\"isShuffleOption\\":false,\\"isPartialScore\\":true,\\"evalUnordered\\":false,\\"templateType\\":\\"Horizontal\\",\\"name\\":\\"light 7 mcq 1\\",\\"title\\":\\"light 7 mcq 1\\",\\"copyright\\":\\"Tamil Nadu\\",\\"board\\":\\"State (Tamil Nadu)\\",\\"topic\\":[],\\"medium\\":\\"English\\",\\"gradeLevel\\":[\\"Class 10\\"],\\"subject\\":\\"Science\\",\\"qlevel\\":\\"EASY\\",\\"category\\":\\"MCQ\\"},\\"max_time\\":0,\\"max_score\\":1,\\"partial_scoring\\":true,\\"layout\\":\\"Horizontal\\",\\"isShuffleOption\\":false,\\"questionCount\\":1,\\"evalUnordered\\":false},\\"media\\":[]},\\"questionTitle\\":\\"light 7 mcq 1\\",\\"qlevel\\":\\"EASY\\",\\"board\\":\\"State (Tamil Nadu)\\",\\"gradeLevel\\":[\\"Class 10\\"],\\"medium\\":\\"English\\",\\"subject\\":\\"Science\\",\\"templateType\\":\\"Horizontal\\",\\"isPartialScore\\":true,\\"isShuffleOption\\":false,\\"evalUnordered\\":false,\\"max_score\\":1,\\"name\\":\\"light 7 mcq 1\\",\\"title\\":\\"light 7 mcq 1\\",\\"copyright\\":\\"Tamil Nadu\\",\\"category\\":\\"MCQ\\"},\\"max_time\\":0,\\"max_score\\":1,\\"partial_scoring\\":true,\\"layout\\":\\"Horizontal\\",\\"isShuffleOption\\":false,\\"questionCount\\":1,\\"evalUnordered\\":false}"},"w":80,"h":85,"x":9,"y":6},{"id":"do_2130765901859143681227","type":"mcq","pluginId":"org.ekstep.questionunit.mcq","pluginVer":"1.3","templateId":"horizontalMCQ","data":{"__cdata":"{\\"question\\":{\\"text\\":\\"<p style=\'font-size:1.285em;\'>A ray of light passes from a medium X to another medium Y. No refraction of light occurs if the ray of light hits the boundary of medium Y at an angle of:</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"hint\\":\\"\\"},\\"options\\":[{\\"text\\":\\"<p style=\'font-size:1.285em;\'>120 degree</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"hint\\":\\"\\",\\"isCorrect\\":false,\\"$$hashKey\\":\\"object:1249\\"},{\\"text\\":\\"<p style=\'font-size:1.285em;\'>90&nbsp;degree</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"hint\\":\\"\\",\\"isCorrect\\":true,\\"$$hashKey\\":\\"object:1250\\"},{\\"text\\":\\"<p style=\'font-size:1.285em;\'>45 degree</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"isCorrect\\":false,\\"$$hashKey\\":\\"object:1265\\"},{\\"text\\":\\"<p style=\'font-size:1.285em;\'>0 degree</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"isCorrect\\":false,\\"$$hashKey\\":\\"object:1270\\"}],\\"questionCount\\":0,\\"media\\":[]}"},"config":{"__cdata":"{\\"metadata\\":{\\"data\\":{\\"plugin\\":{\\"id\\":\\"org.ekstep.questionunit.mcq\\",\\"version\\":\\"1.3\\",\\"templateId\\":\\"horizontalMCQ\\"},\\"data\\":{\\"question\\":{\\"text\\":\\"<p>A ray of light passes from a medium X to another medium Y. No refraction of light occurs if the ray of light hits the boundary of medium Y at an angle of:</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"hint\\":\\"\\"},\\"options\\":[{\\"text\\":\\"<p>120 degree</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"hint\\":\\"\\",\\"isCorrect\\":false,\\"$$hashKey\\":\\"object:1249\\"},{\\"text\\":\\"<p>90&nbsp;degree</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"hint\\":\\"\\",\\"isCorrect\\":true,\\"$$hashKey\\":\\"object:1250\\"},{\\"text\\":\\"<p>45 degree</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"isCorrect\\":false,\\"$$hashKey\\":\\"object:1265\\"},{\\"text\\":\\"<p>0 degree</p>\\\\n\\",\\"image\\":\\"\\",\\"audio\\":\\"\\",\\"audioName\\":\\"\\",\\"isCorrect\\":false,\\"$$hashKey\\":\\"object:1270\\"}],\\"questionCount\\":0,\\"media\\":[]},\\"config\\":{\\"metadata\\":{\\"max_score\\":1,\\"isShuffleOption\\":false,\\"isPartialScore\\":true,\\"evalUnordered\\":false,\\"templateType\\":\\"Horizontal\\",\\"name\\":\\"light 7 mcq 1\\",\\"title\\":\\"light 7 mcq 1\\",\\"copyright\\":\\"Tamil Nadu\\",\\"board\\":\\"State (Tamil Nadu)\\",\\"topic\\":[],\\"medium\\":\\"English\\",\\"gradeLevel\\":[\\"Class 10\\"],\\"subject\\":\\"Science\\",\\"qlevel\\":\\"EASY\\",\\"category\\":\\"MCQ\\"},\\"max_time\\":0,\\"max_score\\":1,\\"partial_scoring\\":true,\\"layout\\":\\"Horizontal\\",\\"isShuffleOption\\":false,\\"questionCount\\":1,\\"evalUnordered\\":false},\\"media\\":[]},\\"questionTitle\\":\\"light 7 mcq 1\\",\\"qlevel\\":\\"EASY\\",\\"board\\":\\"State (Tamil Nadu)\\",\\"gradeLevel\\":[\\"Class 10\\"],\\"medium\\":\\"English\\",\\"subject\\":\\"Science\\",\\"templateType\\":\\"Horizontal\\",\\"isPartialScore\\":true,\\"isShuffleOption\\":false,\\"evalUnordered\\":false,\\"max_score\\":1,\\"name\\":\\"light 7 mcq 1\\",\\"title\\":\\"light 7 mcq 1\\",\\"copyright\\":\\"Tamil Nadu\\",\\"category\\":\\"MCQ\\"},\\"max_time\\":0,\\"max_score\\":1,\\"partial_scoring\\":true,\\"layout\\":\\"Horizontal\\",\\"isShuffleOption\\":false,\\"questionCount\\":1,\\"evalUnordered\\":false}"},"w":80,"h":85,"x":9,"y":6}],"data":{"__cdata":"[{\\"code\\":\\"NA\\",\\"isShuffleOption\\":false,\\"body\\":\\"{\\\\\\"data\\\\\\":{\\\\\\"plugin\\\\\\":{\\\\\\"id\\\\\\":\\\\\\"org.ekstep.questionunit.mcq\\\\\\",\\\\\\"version\\\\\\":\\\\\\"1.3\\\\\\",\\\\\\"templateId\\\\\\":\\\\\\"horizontalMCQ\\\\\\"},\\\\\\"data\\\\\\":{\\\\\\"question\\\\\\":{\\\\\\"text\\\\\\":\\\\\\"<p>Can an index of refraction be less than 1?</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"hint\\\\\\":\\\\\\"\\\\\\"},\\\\\\"options\\\\\\":[{\\\\\\"text\\\\\\":\\\\\\"<p>yes</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"isCorrect\\\\\\":true,\\\\\\"$$hashKey\\\\\\":\\\\\\"object:1265\\\\\\"},{\\\\\\"text\\\\\\":\\\\\\"<p>no</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"isCorrect\\\\\\":false,\\\\\\"$$hashKey\\\\\\":\\\\\\"object:1270\\\\\\"}],\\\\\\"questionCount\\\\\\":0,\\\\\\"media\\\\\\":[]},\\\\\\"config\\\\\\":{\\\\\\"metadata\\\\\\":{\\\\\\"data\\\\\\":{\\\\\\"plugin\\\\\\":{\\\\\\"id\\\\\\":\\\\\\"org.ekstep.questionunit.mcq\\\\\\",\\\\\\"version\\\\\\":\\\\\\"1.3\\\\\\",\\\\\\"templateId\\\\\\":\\\\\\"horizontalMCQ\\\\\\"},\\\\\\"data\\\\\\":{\\\\\\"question\\\\\\":{\\\\\\"text\\\\\\":\\\\\\"<p>Can an index of refraction be less than 1?</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"hint\\\\\\":\\\\\\"\\\\\\"},\\\\\\"options\\\\\\":[{\\\\\\"text\\\\\\":\\\\\\"<p>yes</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"isCorrect\\\\\\":true,\\\\\\"$$hashKey\\\\\\":\\\\\\"object:1265\\\\\\"},{\\\\\\"text\\\\\\":\\\\\\"<p>no</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"isCorrect\\\\\\":false,\\\\\\"$$hashKey\\\\\\":\\\\\\"object:1270\\\\\\"}],\\\\\\"questionCount\\\\\\":0,\\\\\\"media\\\\\\":[]},\\\\\\"config\\\\\\":{\\\\\\"metadata\\\\\\":{\\\\\\"max_score\\\\\\":1,\\\\\\"isShuffleOption\\\\\\":false,\\\\\\"isPartialScore\\\\\\":true,\\\\\\"evalUnordered\\\\\\":false,\\\\\\"templateType\\\\\\":\\\\\\"Horizontal\\\\\\",\\\\\\"name\\\\\\":\\\\\\"light 7 mcq 1\\\\\\",\\\\\\"title\\\\\\":\\\\\\"light 7 mcq 1\\\\\\",\\\\\\"copyright\\\\\\":\\\\\\"Tamil Nadu\\\\\\",\\\\\\"board\\\\\\":\\\\\\"State (Tamil Nadu)\\\\\\",\\\\\\"topic\\\\\\":[],\\\\\\"medium\\\\\\":\\\\\\"English\\\\\\",\\\\\\"gradeLevel\\\\\\":[\\\\\\"Class 10\\\\\\"],\\\\\\"subject\\\\\\":\\\\\\"Science\\\\\\",\\\\\\"qlevel\\\\\\":\\\\\\"EASY\\\\\\",\\\\\\"category\\\\\\":\\\\\\"MCQ\\\\\\"},\\\\\\"max_time\\\\\\":0,\\\\\\"max_score\\\\\\":1,\\\\\\"partial_scoring\\\\\\":true,\\\\\\"layout\\\\\\":\\\\\\"Horizontal\\\\\\",\\\\\\"isShuffleOption\\\\\\":false,\\\\\\"questionCount\\\\\\":1,\\\\\\"evalUnordered\\\\\\":false},\\\\\\"media\\\\\\":[]},\\\\\\"questionTitle\\\\\\":\\\\\\"light 7 mcq 1\\\\\\",\\\\\\"qlevel\\\\\\":\\\\\\"EASY\\\\\\",\\\\\\"board\\\\\\":\\\\\\"State (Tamil Nadu)\\\\\\",\\\\\\"gradeLevel\\\\\\":[\\\\\\"Class 10\\\\\\"],\\\\\\"medium\\\\\\":\\\\\\"English\\\\\\",\\\\\\"subject\\\\\\":\\\\\\"Science\\\\\\",\\\\\\"templateType\\\\\\":\\\\\\"Horizontal\\\\\\",\\\\\\"isPartialScore\\\\\\":true,\\\\\\"isShuffleOption\\\\\\":false,\\\\\\"evalUnordered\\\\\\":false,\\\\\\"max_score\\\\\\":1,\\\\\\"name\\\\\\":\\\\\\"light 7 mcq 1\\\\\\",\\\\\\"title\\\\\\":\\\\\\"light 7 mcq 1\\\\\\",\\\\\\"copyright\\\\\\":\\\\\\"Tamil Nadu\\\\\\",\\\\\\"category\\\\\\":\\\\\\"MCQ\\\\\\"},\\\\\\"max_time\\\\\\":0,\\\\\\"max_score\\\\\\":1,\\\\\\"partial_scoring\\\\\\":true,\\\\\\"layout\\\\\\":\\\\\\"Horizontal\\\\\\",\\\\\\"isShuffleOption\\\\\\":false,\\\\\\"questionCount\\\\\\":1,\\\\\\"evalUnordered\\\\\\":false},\\\\\\"media\\\\\\":[]}}\\",\\"itemType\\":\\"UNIT\\",\\"version\\":2,\\"category\\":\\"MCQ\\",\\"createdBy\\":\\"3616dc07-0061-40c3-bbf8-9533337bdb8b\\",\\"channel\\":\\"01269878797503692810\\",\\"type\\":\\"mcq\\",\\"template\\":\\"NA\\",\\"template_id\\":\\"NA\\",\\"framework\\":\\"tn_k-12_5\\",\\"questionTitle\\":\\"light 7 mcq 1\\",\\"qlevel\\":\\"EASY\\",\\"board\\":\\"State (Tamil Nadu)\\",\\"gradeLevel\\":[\\"Class 10\\"],\\"medium\\":\\"English\\",\\"subject\\":\\"Science\\",\\"templateType\\":\\"Horizontal\\",\\"isPartialScore\\":true,\\"evalUnordered\\":false,\\"max_score\\":1,\\"name\\":\\"light 7 mcq 1\\",\\"title\\":\\"light 7 mcq 1\\",\\"copyright\\":\\"Tamil Nadu\\",\\"options\\":[{\\"answer\\":true,\\"value\\":{\\"type\\":\\"text\\",\\"asset\\":\\"1\\"}}],\\"identifier\\":\\"do_2130765931322572801228\\",\\"isSelected\\":true,\\"$$hashKey\\":\\"object:2414\\"},{\\"code\\":\\"NA\\",\\"isShuffleOption\\":false,\\"body\\":\\"{\\\\\\"data\\\\\\":{\\\\\\"plugin\\\\\\":{\\\\\\"id\\\\\\":\\\\\\"org.ekstep.questionunit.mcq\\\\\\",\\\\\\"version\\\\\\":\\\\\\"1.3\\\\\\",\\\\\\"templateId\\\\\\":\\\\\\"horizontalMCQ\\\\\\"},\\\\\\"data\\\\\\":{\\\\\\"question\\\\\\":{\\\\\\"text\\\\\\":\\\\\\"<p>A ray of light passes from a medium X to another medium Y. No refraction of light occurs if the ray of light hits the boundary of medium Y at an angle of:</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"hint\\\\\\":\\\\\\"\\\\\\"},\\\\\\"options\\\\\\":[{\\\\\\"text\\\\\\":\\\\\\"<p>120 degree</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"hint\\\\\\":\\\\\\"\\\\\\",\\\\\\"isCorrect\\\\\\":false,\\\\\\"$$hashKey\\\\\\":\\\\\\"object:1249\\\\\\"},{\\\\\\"text\\\\\\":\\\\\\"<p>90&nbsp;degree</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"hint\\\\\\":\\\\\\"\\\\\\",\\\\\\"isCorrect\\\\\\":true,\\\\\\"$$hashKey\\\\\\":\\\\\\"object:1250\\\\\\"},{\\\\\\"text\\\\\\":\\\\\\"<p>45 degree</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"isCorrect\\\\\\":false,\\\\\\"$$hashKey\\\\\\":\\\\\\"object:1265\\\\\\"},{\\\\\\"text\\\\\\":\\\\\\"<p>0 degree</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"isCorrect\\\\\\":false,\\\\\\"$$hashKey\\\\\\":\\\\\\"object:1270\\\\\\"}],\\\\\\"questionCount\\\\\\":0,\\\\\\"media\\\\\\":[]},\\\\\\"config\\\\\\":{\\\\\\"metadata\\\\\\":{\\\\\\"data\\\\\\":{\\\\\\"plugin\\\\\\":{\\\\\\"id\\\\\\":\\\\\\"org.ekstep.questionunit.mcq\\\\\\",\\\\\\"version\\\\\\":\\\\\\"1.3\\\\\\",\\\\\\"templateId\\\\\\":\\\\\\"horizontalMCQ\\\\\\"},\\\\\\"data\\\\\\":{\\\\\\"question\\\\\\":{\\\\\\"text\\\\\\":\\\\\\"<p>A ray of light passes from a medium X to another medium Y. No refraction of light occurs if the ray of light hits the boundary of medium Y at an angle of:</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"hint\\\\\\":\\\\\\"\\\\\\"},\\\\\\"options\\\\\\":[{\\\\\\"text\\\\\\":\\\\\\"<p>120 degree</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"hint\\\\\\":\\\\\\"\\\\\\",\\\\\\"isCorrect\\\\\\":false,\\\\\\"$$hashKey\\\\\\":\\\\\\"object:1249\\\\\\"},{\\\\\\"text\\\\\\":\\\\\\"<p>90&nbsp;degree</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"hint\\\\\\":\\\\\\"\\\\\\",\\\\\\"isCorrect\\\\\\":true,\\\\\\"$$hashKey\\\\\\":\\\\\\"object:1250\\\\\\"},{\\\\\\"text\\\\\\":\\\\\\"<p>45 degree</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"isCorrect\\\\\\":false,\\\\\\"$$hashKey\\\\\\":\\\\\\"object:1265\\\\\\"},{\\\\\\"text\\\\\\":\\\\\\"<p>0 degree</p>\\\\\\\\n\\\\\\",\\\\\\"image\\\\\\":\\\\\\"\\\\\\",\\\\\\"audio\\\\\\":\\\\\\"\\\\\\",\\\\\\"audioName\\\\\\":\\\\\\"\\\\\\",\\\\\\"isCorrect\\\\\\":false,\\\\\\"$$hashKey\\\\\\":\\\\\\"object:1270\\\\\\"}],\\\\\\"questionCount\\\\\\":0,\\\\\\"media\\\\\\":[]},\\\\\\"config\\\\\\":{\\\\\\"metadata\\\\\\":{\\\\\\"max_score\\\\\\":1,\\\\\\"isShuffleOption\\\\\\":false,\\\\\\"isPartialScore\\\\\\":true,\\\\\\"evalUnordered\\\\\\":false,\\\\\\"templateType\\\\\\":\\\\\\"Horizontal\\\\\\",\\\\\\"name\\\\\\":\\\\\\"light 7 mcq 1\\\\\\",\\\\\\"title\\\\\\":\\\\\\"light 7 mcq 1\\\\\\",\\\\\\"copyright\\\\\\":\\\\\\"Tamil Nadu\\\\\\",\\\\\\"board\\\\\\":\\\\\\"State (Tamil Nadu)\\\\\\",\\\\\\"topic\\\\\\":[],\\\\\\"medium\\\\\\":\\\\\\"English\\\\\\",\\\\\\"gradeLevel\\\\\\":[\\\\\\"Class 10\\\\\\"],\\\\\\"subject\\\\\\":\\\\\\"Science\\\\\\",\\\\\\"qlevel\\\\\\":\\\\\\"EASY\\\\\\",\\\\\\"category\\\\\\":\\\\\\"MCQ\\\\\\"},\\\\\\"max_time\\\\\\":0,\\\\\\"max_score\\\\\\":1,\\\\\\"partial_scoring\\\\\\":true,\\\\\\"layout\\\\\\":\\\\\\"Horizontal\\\\\\",\\\\\\"isShuffleOption\\\\\\":false,\\\\\\"questionCount\\\\\\":1,\\\\\\"evalUnordered\\\\\\":false},\\\\\\"media\\\\\\":[]},\\\\\\"questionTitle\\\\\\":\\\\\\"light 7 mcq 1\\\\\\",\\\\\\"qlevel\\\\\\":\\\\\\"EASY\\\\\\",\\\\\\"board\\\\\\":\\\\\\"State (Tamil Nadu)\\\\\\",\\\\\\"gradeLevel\\\\\\":[\\\\\\"Class 10\\\\\\"],\\\\\\"medium\\\\\\":\\\\\\"English\\\\\\",\\\\\\"subject\\\\\\":\\\\\\"Science\\\\\\",\\\\\\"templateType\\\\\\":\\\\\\"Horizontal\\\\\\",\\\\\\"isPartialScore\\\\\\":true,\\\\\\"isShuffleOption\\\\\\":false,\\\\\\"evalUnordered\\\\\\":false,\\\\\\"max_score\\\\\\":1,\\\\\\"name\\\\\\":\\\\\\"light 7 mcq 1\\\\\\",\\\\\\"title\\\\\\":\\\\\\"light 7 mcq 1\\\\\\",\\\\\\"copyright\\\\\\":\\\\\\"Tamil Nadu\\\\\\",\\\\\\"category\\\\\\":\\\\\\"MCQ\\\\\\"},\\\\\\"max_time\\\\\\":0,\\\\\\"max_score\\\\\\":1,\\\\\\"partial_scoring\\\\\\":true,\\\\\\"layout\\\\\\":\\\\\\"Horizontal\\\\\\",\\\\\\"isShuffleOption\\\\\\":false,\\\\\\"questionCount\\\\\\":1,\\\\\\"evalUnordered\\\\\\":false},\\\\\\"media\\\\\\":[]}}\\",\\"itemType\\":\\"UNIT\\",\\"version\\":2,\\"category\\":\\"MCQ\\",\\"createdBy\\":\\"3616dc07-0061-40c3-bbf8-9533337bdb8b\\",\\"channel\\":\\"01269878797503692810\\",\\"type\\":\\"mcq\\",\\"template\\":\\"NA\\",\\"template_id\\":\\"NA\\",\\"framework\\":\\"tn_k-12_5\\",\\"questionTitle\\":\\"light 7 mcq 1\\",\\"qlevel\\":\\"EASY\\",\\"board\\":\\"State (Tamil Nadu)\\",\\"gradeLevel\\":[\\"Class 10\\"],\\"medium\\":\\"English\\",\\"subject\\":\\"Science\\",\\"templateType\\":\\"Horizontal\\",\\"isPartialScore\\":true,\\"evalUnordered\\":false,\\"max_score\\":1,\\"name\\":\\"light 7 mcq 1\\",\\"title\\":\\"light 7 mcq 1\\",\\"copyright\\":\\"Tamil Nadu\\",\\"options\\":[{\\"answer\\":true,\\"value\\":{\\"type\\":\\"text\\",\\"asset\\":\\"1\\"}}],\\"identifier\\":\\"do_2130765901859143681227\\",\\"isSelected\\":true,\\"$$hashKey\\":\\"object:2377\\"}]"},"config":{"__cdata":"{\\"title\\":\\"7\\",\\"max_score\\":2,\\"allow_skip\\":true,\\"show_feedback\\":true,\\"shuffle_questions\\":true,\\"shuffle_options\\":false,\\"total_items\\":2,\\"btn_edit\\":\\"Edit\\"}"}}]}],"manifest":{"media":[{"id":"org.ekstep.text","plugin":"org.ekstep.text","ver":"1.2","src":"/content-plugins/org.ekstep.text-1.2/renderer/supertextplugin.js","type":"plugin"},{"id":"org.ekstep.text_manifest","plugin":"org.ekstep.text","ver":"1.2","src":"/content-plugins/org.ekstep.text-1.2/manifest.json","type":"json"},{"id":"org.ekstep.questionset.quiz","plugin":"org.ekstep.questionset.quiz","ver":"1.0","src":"/content-plugins/org.ekstep.questionset.quiz-1.0/renderer/plugin.js","type":"plugin"},{"id":"org.ekstep.questionset.quiz_manifest","plugin":"org.ekstep.questionset.quiz","ver":"1.0","src":"/content-plugins/org.ekstep.questionset.quiz-1.0/manifest.json","type":"json"},{"id":"org.ekstep.iterator","plugin":"org.ekstep.iterator","ver":"1.0","src":"/content-plugins/org.ekstep.iterator-1.0/renderer/plugin.js","type":"plugin"},{"id":"org.ekstep.iterator_manifest","plugin":"org.ekstep.iterator","ver":"1.0","src":"/content-plugins/org.ekstep.iterator-1.0/manifest.json","type":"json"},{"id":"590a7366-2662-4a9d-a798-2d89178e5168","plugin":"org.ekstep.questionset","ver":"1.0","src":"/content-plugins/org.ekstep.questionset-1.0/renderer/utils/telemetry_logger.js","type":"js"},{"id":"84d0627c-130b-4399-a07b-7d54cece854e","plugin":"org.ekstep.questionset","ver":"1.0","src":"/content-plugins/org.ekstep.questionset-1.0/renderer/utils/html_audio_plugin.js","type":"js"},{"id":"c62796d8-6642-430d-a5a0-46aad0d1ca19","plugin":"org.ekstep.questionset","ver":"1.0","src":"/content-plugins/org.ekstep.questionset-1.0/renderer/utils/qs_feedback_popup.js","type":"js"},{"id":"org.ekstep.questionset","plugin":"org.ekstep.questionset","ver":"1.0","src":"/content-plugins/org.ekstep.questionset-1.0/renderer/plugin.js","type":"plugin"},{"id":"org.ekstep.questionset_manifest","plugin":"org.ekstep.questionset","ver":"1.0","src":"/content-plugins/org.ekstep.questionset-1.0/manifest.json","type":"json"},{"id":"5aaa0ace-284c-4895-a8b4-5bc3128199d7","plugin":"org.ekstep.navigation","ver":"1.0","src":"/content-plugins/org.ekstep.navigation-1.0/renderer/controller/navigation_ctrl.js","type":"js"},{"id":"7592cdc5-7c5d-4144-8500-6c38005db637","plugin":"org.ekstep.navigation","ver":"1.0","src":"/content-plugins/org.ekstep.navigation-1.0/renderer/templates/navigation.html","type":"js"},{"id":"org.ekstep.navigation","plugin":"org.ekstep.navigation","ver":"1.0","src":"/content-plugins/org.ekstep.navigation-1.0/renderer/plugin.js","type":"plugin"},{"id":"org.ekstep.navigation_manifest","plugin":"org.ekstep.navigation","ver":"1.0","src":"/content-plugins/org.ekstep.navigation-1.0/manifest.json","type":"json"},{"id":"org.ekstep.questionunit.renderer.audioicon","plugin":"org.ekstep.questionunit","ver":"1.2","src":"/content-plugins/org.ekstep.questionunit-1.2/renderer/assets/audio-icon.png","type":"image"},{"id":"org.ekstep.questionunit.renderer.downarrow","plugin":"org.ekstep.questionunit","ver":"1.2","src":"/content-plugins/org.ekstep.questionunit-1.2/renderer/assets/down_arrow.png","type":"image"},{"id":"org.ekstep.questionunit.renderer.zoom","plugin":"org.ekstep.questionunit","ver":"1.2","src":"/content-plugins/org.ekstep.questionunit-1.2/renderer/assets/zoom.png","type":"image"},{"id":"org.ekstep.questionunit.renderer.audio-icon1","plugin":"org.ekstep.questionunit","ver":"1.2","src":"/content-plugins/org.ekstep.questionunit-1.2/renderer/assets/audio-icon1.png","type":"image"},{"id":"028c6a41-15eb-464b-89a6-99787153b06d","plugin":"org.ekstep.questionunit","ver":"1.2","src":"/content-plugins/org.ekstep.questionunit-1.2/renderer/components/js/components.js","type":"js"},{"id":"d68803de-1c8d-4a43-98ad-d2084303d8a3","plugin":"org.ekstep.questionunit","ver":"1.2","src":"/content-plugins/org.ekstep.questionunit-1.2/renderer/components/css/components.css","type":"css"},{"id":"org.ekstep.questionunit","plugin":"org.ekstep.questionunit","ver":"1.2","src":"/content-plugins/org.ekstep.questionunit-1.2/renderer/plugin.js","type":"plugin"},{"id":"org.ekstep.questionunit_manifest","plugin":"org.ekstep.questionunit","ver":"1.2","src":"/content-plugins/org.ekstep.questionunit-1.2/manifest.json","type":"json"},{"id":"2c1dce36-eee0-4831-936e-9c932595b1c7","plugin":"org.ekstep.questionunit.mcq","ver":"1.3","src":"/content-plugins/org.ekstep.questionunit.mcq-1.3/renderer/styles/style.css","type":"css"},{"id":"cdaaa7a2-e7cd-4e05-ad53-ba8156a0b979","plugin":"org.ekstep.questionunit.mcq","ver":"1.3","src":"/content-plugins/org.ekstep.questionunit.mcq-1.3/renderer/styles/horizontal_and_vertical.css","type":"css"},{"id":"4228d921-c2be-4248-83b1-e7e469de08cd","plugin":"org.ekstep.questionunit.mcq","ver":"1.3","src":"/content-plugins/org.ekstep.questionunit.mcq-1.3/renderer/template/mcq-layouts.js","type":"js"},{"id":"25a3e055-9e4d-4322-ac3c-902535617c2e","plugin":"org.ekstep.questionunit.mcq","ver":"1.3","src":"/content-plugins/org.ekstep.questionunit.mcq-1.3/renderer/template/template_controller.js","type":"js"},{"id":"783ec530-3b7c-47b1-8389-d77cd985494d","plugin":"org.ekstep.questionunit.mcq","ver":"1.3","src":"/content-plugins/org.ekstep.questionunit.mcq-1.3/renderer/template/question-component.js","type":"js"},{"id":"e1176108-ad5d-4722-8393-70c32d2d0b95","plugin":"org.ekstep.questionunit.mcq","ver":"1.3","src":"/content-plugins/org.ekstep.questionunit.mcq-1.3/renderer/assets/tick_icon.png","type":"image"},{"id":"60e11847-9034-40e8-a42c-bc34022da475","plugin":"org.ekstep.questionunit.mcq","ver":"1.3","src":"/content-plugins/org.ekstep.questionunit.mcq-1.3/renderer/assets/audio-icon2.png","type":"image"},{"id":"63168dc3-0e70-4253-9794-d503bd239921","plugin":"org.ekstep.questionunit.mcq","ver":"1.3","src":"/content-plugins/org.ekstep.questionunit.mcq-1.3/renderer/assets/music-blue.png","type":"image"},{"id":"org.ekstep.questionunit.mcq","plugin":"org.ekstep.questionunit.mcq","ver":"1.3","src":"/content-plugins/org.ekstep.questionunit.mcq-1.3/renderer/plugin.js","type":"plugin"},{"id":"org.ekstep.questionunit.mcq_manifest","plugin":"org.ekstep.questionunit.mcq","ver":"1.3","src":"/content-plugins/org.ekstep.questionunit.mcq-1.3/manifest.json","type":"json"},{"id":"QuizImage","src":"/content-plugins/org.ekstep.questionset-1.0/editor/assets/quizimage.png","assetId":"QuizImage","type":"image","preload":true}]},"plugin-manifest":{"plugin":[{"id":"org.ekstep.text","ver":"1.2","type":"plugin","depends":""},{"id":"org.ekstep.questionset.quiz","ver":"1.0","type":"plugin","depends":""},{"id":"org.ekstep.iterator","ver":"1.0","type":"plugin","depends":""},{"id":"org.ekstep.questionset","ver":"1.0","type":"plugin","depends":"org.ekstep.questionset.quiz,org.ekstep.iterator"},{"id":"org.ekstep.navigation","ver":"1.0","type":"plugin","depends":""},{"id":"org.ekstep.questionunit","ver":"1.2","type":"plugin","depends":""},{"id":"org.ekstep.questionunit.mcq","ver":"1.3","type":"plugin","depends":"org.ekstep.questionunit"}]},"compatibilityVersion":2,"patch":"patch_1"}}'
};


  @ViewChild('preview', { static: false }) previewElement: ElementRef;
  ngOnInit(): void {
    const playerInterval = setInterval(() => {
      //this.playerConfig.uid = this.playerConfig.context.actor.id;
     // this.playerConfig.metadata.basePath = '/_app_file_' + this.playerConfig.metadata.basePath;


      if (this.previewElement?.nativeElement) {
        clearInterval(playerInterval);
        // This is to reload a iframe as iframes reload method not working on cross-origin.
        const src = this.previewElement.nativeElement.src;
        this.previewElement.nativeElement.src = '';
        this.previewElement.nativeElement.src = src;
        this.previewElement.nativeElement.onload = () => {
          setTimeout(() => {
            this.previewElement.nativeElement.contentWindow.initializePreview(this.playerConfig);
            this.previewElement.nativeElement.contentWindow.addEventListener('message', resp => {
              if (resp.data === 'renderer:question:submitscore') {
                // this.courseService.syncAssessmentEvents().subscribe();
              } else if (resp.data === 'renderer:question:reviewAssessment') {
                // this.courseService.clearAssessments().subscribe();
              } else if (resp.data && typeof resp.data === 'object') {
                if (resp.data['player.pdf-renderer.error']) {
                  const pdfError = resp.data['player.pdf-renderer.error'];
                  if (pdfError.name === 'MissingPDFException') {
                  }
                } else if (resp.data && resp.data.event === 'renderer:contentNotComaptible'
                  || resp.data && resp.data.data.event === 'renderer:contentNotComaptible') {
                  // cordova.plugins.InAppUpdateManager.checkForImmediateUpdate(
                  //   () => { },
                  //   () => { }
                  // );
                } else if (resp.data && resp.data.event === 'renderer:maxLimitExceeded') {
                  // this.closeIframe();
                }
              } else if (this.isJSON(resp.data)) {
                const response = JSON.parse(resp.data);
                if (response.event === 'renderer:navigate') {
                  // this.navigateBackToTrackableCollection = true;
                  // this.navigateBackToContentDetails = false;
                  // this.closeIframe({
                  //   identifier: response.data.identifier
                  // });
                }
              }
            });
          }, 1000);
        };
      }
  }, 500);
  }

  playerEvents(event) {

  }
  playerTelemetryEvents(event) {

  }

  onEnter(value) {
    this.value = JSON.parse(value);
    this.playerConfig.data = this.value.result.content.body;
    this.playerConfig.metadata = this.value.result.content;
    this.previewElement.nativeElement.contentWindow.location.reload();
    setTimeout(() => {
      this.previewElement.nativeElement.contentWindow.initializePreview(this.playerConfig);
    }, 2000);

  }

  private isJSON(input): boolean {
    try {
      JSON.parse(input);
      return true;
    } catch (e) {
      return false;
    }
  }

}
