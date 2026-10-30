(() => {
  // English remains in the source pages; these translations preserve links and formatting.
  const translations = {
    "Research": "研究",
    "Publications": "论文发表",
    "About & CV": "关于与简历",
    "Teaching": "教学",
    "News": "动态",
    "More": "更多",
    "Supervision & collaborators": "学生指导与合作",
    "Resources": "资源",
    "Gallery": "相册",
    "On this page": "本页目录",
    "Contact": "联系",
    "Design inspiration": "设计参考",
    "© 2026 Zhenkun Li · Structural health monitoring & intelligent sensing": "© 2026 Zhenkun Li · 结构健康监测与智能感知",
    "Search": "搜索",
    "Cancel": "取消",
    "Submit": "搜索",
    "Clear": "清除",
    "Clear search": "清除搜索",
    "No results": "没有搜索结果",
    "No matching documents": "没有匹配的页面",
    "Hide matches": "收起匹配结果",
    "Toggle navigation": "展开或收起导航",
    "Anchor": "章节链接",
    "Copy to Clipboard": "复制到剪贴板",
    "Structural health monitoring · Intelligent sensing": "结构健康监测 · 智能感知",
    "Structural Health Monitoring & Intelligent Sensing": "结构健康监测与智能感知",
    "Postdoctoral Researcher": "博士后研究员",
    "Department of Wind and Energy Systems": "风能与能源系统系",
    "Technical University of Denmark": "丹麦技术大学",
    ", Denmark": "，丹麦",
    "I study how measurements and computational models can reveal the condition of structures. My research brings together": "我研究如何通过测量数据与计算模型评估结构状态，将",
    "structural dynamics, machine learning, and intelligent sensing": "结构动力学、机器学习与智能感知",
    "for infrastructure assessment.": "相结合，服务于基础设施评估。",
    "At DTU, my current work focuses on structural health monitoring, digital twins, computer vision, and predictive maintenance for wind turbines. My wider research spans drive-by bridge monitoring, damage identification, and Bayesian inference.": "我目前在丹麦技术大学研究风力发电机组的结构健康监测、数字孪生、计算机视觉与预测性维护。其他研究方向包括桥梁间接监测、损伤识别与贝叶斯推断。",
    "Explore my research": "了解我的研究",
    "Download CV ↓": "下载简历 ↓",
    "Email": "电子邮箱",
    "Academic profiles and contact": "学术主页与联系方式",
    "Portrait of Zhenkun Li": "Zhenkun Li 的个人照片",
    "Roskilde, Denmark": "丹麦，罗斯基勒",
    "Research at a glance": "研究概览",
    "All research themes →": "全部研究方向 →",
    "An instrumented scooter and rider on a footbridge during field testing.": "人行桥现场试验中的传感器滑板车与骑行者。",
    "From instrumented vehicles to everyday moving sensors. Field test from Li et al.,": "从装载传感器的车辆到日常移动感知平台。现场试验图片引自 Li 等，",
    "01 · Mobile sensing & bridge monitoring": "01 · 移动感知与桥梁监测",
    "02 · Intelligent damage diagnosis": "02 · 智能损伤诊断",
    "03 · Vision & field monitoring": "03 · 视觉测量与现场监测",
    "04 · Structural identification & Bayesian methods": "04 · 结构识别与贝叶斯方法",
    "05 · Materials informatics": "05 · 材料信息学",
    "Selected reading": "精选论文",
    "All publications →": "全部论文 →",
    "Recent updates": "近期动态",
    "1 October 2026": "2026年10月1日",
    "Joined DTU Wind and Energy Systems as a Postdoctoral Researcher, working on wind turbine operations and maintenance.": "加入丹麦技术大学风能与能源系统系，担任博士后研究员，从事风力发电机组运行与维护研究。",
    "July 2026": "2026年7月",
    "Supervised the team receiving the Audience Prize at the EWSHM Young Researcher Challenge.": "指导的团队获得 EWSHM 青年研究者挑战赛观众奖。",
    "29 January 2026": "2026年1月29日",
    "Our": "我们的",
    "was published in": "已发表于",
    "More news →": "更多动态 →",
    "Interested in structural monitoring, sensing, or data-driven assessment?": "希望交流结构监测、感知或数据驱动评估研究？",
    "Get in touch": "欢迎联系",
    "Research background, experience, and academic service.": "研究背景、工作经历与学术服务。",
    "Zhenkun Li’s academic biography, education, professional experience, service, and awards.": "Zhenkun Li 的学术简介、教育背景、工作经历、学术服务与获奖情况。",
    "Biography": "个人简介",
    "I am a": "我目前是",
    "Postdoctoral Researcher at the Technical University of Denmark (DTU)": "丹麦技术大学（DTU）博士后研究员",
    ", working with Kim Branner on structural health monitoring, digital twins, computer vision, and predictive maintenance for wind turbines.": "，与 Kim Branner 合作，研究风力发电机组的结构健康监测、数字孪生、计算机视觉与预测性维护。",
    "I received my D.Sc. (Tech.) in Civil Engineering from Aalto University in 2023, supervised by Weiwei Lin. My doctoral thesis,": "我于2023年在阿尔托大学获得土木工程博士学位，导师为 Weiwei Lin。博士论文",
    ", received a Dean’s Doctoral Dissertation Award. Before joining DTU, I held research positions at Aalto University and Politecnico di Milano.": "获得学院院长优秀博士论文奖。加入 DTU 前，我曾在阿尔托大学和米兰理工大学从事研究。",
    "My research spans structural dynamics, drive-by inspection, damage identification, Bayesian inference, and learning-based monitoring. I combine signal processing and numerical models with laboratory and field measurements.": "我的研究涵盖结构动力学、桥梁间接检测、损伤识别、贝叶斯推断与基于机器学习的监测，将信号处理和数值模型与实验室及现场测量相结合。",
    "Download full CV ↓": "下载完整简历 ↓",
    "Experience": "工作经历",
    "Period": "时间",
    "Position": "职位",
    "Oct 2026–present": "2026年10月至今",
    ", Technical University of Denmark, Roskilde. With Kim Branner. SHM, digital twins, computer vision, and wind turbine operations and predictive maintenance.": "，丹麦技术大学，罗斯基勒。合作导师：Kim Branner。研究结构健康监测、数字孪生、计算机视觉，以及风力发电机组运行与预测性维护。",
    "Dec 2025–Sep 2026": "2025年12月—2026年9月",
    "Research Fellow": "研究员",
    ", Politecnico di Milano, Milan. With Maria Pina Limongelli. Crowdsensing, satellite-based monitoring, computer vision, value of information, and digital twins.": "，米兰理工大学，米兰。合作导师：Maria Pina Limongelli。研究群智感知、卫星监测、计算机视觉、信息价值与数字孪生。",
    "Nov 2023–Nov 2025": "2023年11月—2025年11月",
    ", Aalto University, Espoo. With Weiwei Lin. SHM, vehicle scanning methods, machine learning, robotics, digital twins, and computer vision.": "，阿尔托大学，埃斯波。合作导师：Weiwei Lin。研究结构健康监测、车辆扫描方法、机器学习、机器人、数字孪生与计算机视觉。",
    "Apr–Sep 2021": "2021年4月—9月",
    "Structural Algorithm Engineer": "结构算法工程师",
    ", Beijing Smartbow Information Technology Co., Ltd., Beijing. SHM and operational modal analysis algorithms in Python and MATLAB.": "，北京智博联信息技术有限公司，北京。使用 Python 和 MATLAB 开发结构健康监测与运营模态分析算法。",
    "Jul 2020–Mar 2021": "2020年7月—2021年3月",
    "Structural Engineer": "结构工程师",
    ", TCDRI, Sinoma International Co., Ltd., Tianjin. Structural design and Revit development.": "，中材国际天津水泥工业设计研究院，天津。从事结构设计与 Revit 开发。",
    "Education": "教育背景",
    "D.Sc. (Tech.), Civil Engineering": "土木工程博士",
    "Aalto University": "阿尔托大学",
    ", Finland · October 2021–October 2023": "，芬兰 · 2021年10月—2023年10月",
    "Supervisor: Weiwei Lin. Thesis:": "导师：Weiwei Lin。学位论文：",
    "(with distinction).": "（优秀学位论文）。",
    "M.Eng., Structural Engineering": "结构工程硕士",
    "Dalian University of Technology": "大连理工大学",
    ", China · September 2017–June 2020": "，中国 · 2017年9月—2020年6月",
    "Supervisor: Jilin Hou. Thesis:": "导师：Jilin Hou。学位论文：",
    "B.Eng., Civil Engineering": "土木工程学士",
    "Qingdao University of Technology": "青岛理工大学",
    ", China · September 2013–June 2017": "，中国 · 2013年9月—2017年6月",
    "Diploma thesis:": "毕业设计：",
    "Academic service": "学术服务",
    "Editorial roles": "编辑任职",
    "Associate Editor": "副主编",
    "Reviewing Editor": "审稿编辑",
    "Early Career Editorial Board": "青年编委",
    "Guest editing": "客座编辑",
    ": Civil Infrastructure Health Monitoring and Digital Twins Integrated with Verification, Validation, and Uncertainty Quantification.": "：融合验证、确认与不确定性量化的土木基础设施健康监测与数字孪生。",
    ": Sustainable and Resilient Civil Infrastructure with Intelligence and Digital Transformation.": "：智能化与数字化转型背景下的可持续韧性土木基础设施。",
    ": Structural Health Monitoring, Modeling, and Durability Assessment of Civil Infrastructure under Operational and Environmental Actions.": "：运营与环境作用下土木基础设施的结构健康监测、建模与耐久性评估。",
    ": Recent Developments and Applications in Vehicle-Assisted Structural Health Monitoring for Infrastructures.": "：车辆辅助基础设施结构健康监测的最新进展与应用。",
    "Evaluation of Buildings’ and Infrastructures’ Performance and Analysis of Seismic and Naturally Induced Disasters": "建筑与基础设施性能评估及地震与自然灾害分析",
    "Advanced Computer Vision Methods and Related Technologies in Structural Health Monitoring": "结构健康监测中的先进计算机视觉方法与相关技术",
    ": Advanced Cementitious Materials: Integrating Nanotechnology, Sustainability, and Intelligent Design.": "：先进水泥基材料：融合纳米技术、可持续性与智能设计。",
    "Peer review and grant evaluation": "期刊审稿与基金评审",
    "Reviewer for journals including": "为以下期刊提供审稿服务：",
    ", and": "以及",
    "Grant evaluation for internal research grants funded by Ajman University’s Deanship of Research and Graduate Studies, United Arab Emirates.": "参与阿联酋阿治曼大学科研与研究生院资助的校内科研基金评审。",
    "Memberships": "学术组织",
    "International Association for Bridge Maintenance and Safety (IABMAS).": "国际桥梁维护与安全协会（IABMAS）。",
    "International Association for Life-Cycle Civil Engineering (IALCCE).": "国际土木工程全寿命周期协会（IALCCE）。",
    "Society for Civil Structural Health Monitoring (SCSHM), full member.": "国际土木结构健康监测学会（SCSHM）正式会员。",
    "Task Group 5.7: Digital Twins on Existing Bridges": "第5.7工作组：既有桥梁数字孪生",
    "Awards & honours": "奖励与荣誉",
    "Year": "年份",
    "Recognition": "奖项",
    "Audience Prize, EWSHM Young Researcher Challenge (supervisor).": "EWSHM 青年研究者挑战赛观众奖（指导教师）。",
    "Dean’s Doctoral Dissertation Award, Aalto University.": "阿尔托大学学院院长优秀博士论文奖。",
    "Incentive grant, Fabian and Jaakko Ahvenainen Foundation, Aalto University.": "阿尔托大学 Fabian and Jaakko Ahvenainen 基金会激励资助。",
    "Excellent Master’s Thesis, Dalian University of Technology.": "大连理工大学优秀硕士学位论文。",
    "Outstanding Graduate of Liaoning Province.": "辽宁省优秀毕业生。",
    "Scholarship of Chinese Road and Bridge, Dalian University of Technology.": "大连理工大学中国路桥奖学金。",
    "Outstanding Postgraduate Student, Dalian University of Technology.": "大连理工大学优秀研究生。",
    "Scholarship from Shandong Province Government (1 of 508 students).": "山东省政府奖学金（508名获奖学生之一）。",
    "Second Prize, National Mathematical Modeling Competition.": "全国大学生数学建模竞赛二等奖。",
    "Second Prize, 14th Challenge Cup Competition in Shandong Province.": "山东省第十四届挑战杯竞赛二等奖。",
    "Methods & technical skills": "方法与技术技能",
    "Programming and analysis:": "编程与分析：",
    "Numerical modelling:": "数值建模：",
    "CAD and BIM:": "CAD 与 BIM：",
    "Research tools:": "科研工具：",
    "Languages:": "语言：",
    "Chinese (native), English (C1), and German (beginner).": "中文（母语）、英语（C1）、德语（初级）。",
    "Certificates include Chinese National Computer Rank Examination Levels 2 and 3, and BIM Skill Proficiency Test Level 1. I have passed the Fundamental Examination for the Chinese National First-Class Registered Structural Engineer qualification.": "取得全国计算机等级考试二级、三级证书及全国 BIM 技能等级考试一级证书，已通过全国一级注册结构工程师基础考试。",
    "Email:": "邮箱：",
    "Address:": "地址：",
    "Measurements, models, and learning for understanding structural condition.": "通过测量、模型与机器学习理解结构状态。",
    "Five connected research themes, illustrated with figures from Zhenkun Li’s publications.": "五个相互关联的研究方向，配以已发表论文中的代表性图片。",
    "My work connects structural mechanics with sensing and data analysis. The themes below bring together research on bridges, civil infrastructure, and engineering materials, from numerical models to laboratory and field measurements.": "我的工作连接结构力学、感知与数据分析。以下方向涵盖桥梁、土木基础设施与工程材料研究，从数值模型延伸到实验室和现场测量。",
    "Research themes": "研究方向",
    "Mobile sensing": "移动感知",
    "Intelligent diagnosis": "智能诊断",
    "Vision & field monitoring": "视觉测量与现场监测",
    "Structural identification": "结构识别",
    "Materials informatics": "材料信息学",
    "01 · Sensing beyond the structure": "01 · 从移动平台感知结构",
    "Mobile sensing & bridge monitoring": "移动感知与桥梁监测",
    "Can a passing vehicle reveal the condition of a bridge? I investigate indirect monitoring through vehicle–bridge interaction, using instrumented vehicles, shared scooters, pedestrians, and robots as moving sensing platforms.": "过桥车辆能否揭示桥梁的健康状态？我通过车桥耦合研究桥梁间接监测，利用装载传感器的车辆、共享滑板车、行人与机器人作为移动感知平台。",
    "This work studies frequency and mode-shape identification, contact-point responses, crowdsensing, and the effects of vehicle dynamics, road roughness, and operating conditions.": "研究内容包括频率与振型识别、接触点响应、群智感知，以及车辆动力学、路面不平度和运行条件的影响。",
    "Representative studies": "代表性研究",
    "3D vehicle–bridge model": "三维车桥耦合模型",
    "Smartphone field tests": "智能手机现场试验",
    "Pedestrian sensing models": "行人感知模型",
    "Full size ↗": "查看大图 ↗",
    "A three-dimensional vehicle model with body, suspension, wheels, and bridge contact points.": "包含车身、悬架、车轮与桥面接触点的三维车辆模型。",
    "Two field photographs showing a smartphone-instrumented shared scooter and rider on a footbridge.": "人行桥现场试验照片：安装智能手机的共享滑板车与骑行者。",
    "Original pedestrian–footbridge interaction models for standing, jumping, and walking activities.": "站立、跳跃与步行活动中的行人与人行桥相互作用模型原图。",
    "Original workflow linking vehicle accelerations, short-time Fourier transforms, and a deep auto-encoder.": "连接车辆加速度、短时傅里叶变换与深度自编码器的方法流程原图。",
    "The experimental steel bridge model with supports, acceleration runway, and deceleration runway.": "带有支座、加速与减速跑道的试验钢桥模型。",
    "Original damage-index histograms comparing a healthy bridge with two added-mass scenarios.": "比较健康桥梁与两种附加质量工况的损伤指标直方图原图。",
    "Camera, moving column, shaker, laser displacement sensor, and LED illumination in the laboratory setup.": "实验室中的相机、运动立柱、激振器、激光位移传感器与 LED 光源。",
    "Displacement time histories comparing the optimized Gabor-wavelet measurement and the laser reference.": "优化 Gabor 小波测量与激光参考测量的位移时程对比。",
    "Side and front photographs of the University of Twente campus footbridge used for strain and temperature monitoring.": "用于应变与温度监测的特温特大学校园人行桥侧面与正面照片。",
    "Original three-dimensional building substructure model and finite-element model with excitation locations.": "建筑三维子结构模型与标有激励位置的有限元模型原图。",
    "Photograph of the three-storey experimental frame, with a modal hammer, sensor, and substructure annotations.": "三层试验框架照片，标注了模态力锤、传感器与各子结构。",
    "Original grouped bar chart comparing identified building damage factors with theoretical values.": "比较建筑损伤因子识别值与理论值的分组柱状图原图。",
    "Original illustration connecting component, structure, mesoscale, and macroscale material models.": "连接组分、结构、细观与宏观尺度材料模型的示意原图。",
    "Original integrated workflow combining stochastic multiscale modelling, uncertainty sampling, XGBoost, and explainable machine learning.": "融合随机多尺度建模、不确定性采样、XGBoost 与可解释机器学习的流程原图。",
    "Original four-panel SHAP plots explaining XGBoost predictions of asphalt complex modulus and phase angle.": "解释 XGBoost 对沥青复数模量与相位角预测的四幅 SHAP 分析原图。",
    "02 · From response to diagnosis": "02 · 从响应到诊断",
    "Intelligent damage diagnosis": "智能损伤诊断",
    "I develop and investigate learning-based methods that connect measured vibration responses to structural damage. These include convolutional neural networks, auto-encoders, signal-processing features, and physics-guided diagnosis.": "我开发并研究基于机器学习的方法，建立实测振动响应与结构损伤之间的联系，包括卷积神经网络、自编码器、信号处理特征与物理引导诊断。",
    "Related work examines synthetic training data, model interpretability, and the vulnerability of learning-based monitoring systems. Numerical simulations and experimental studies help establish where these methods can be useful.": "相关工作还关注合成训练数据、模型可解释性，以及基于机器学习的监测系统的脆弱性。通过数值模拟与实验研究，分析这些方法的适用范围。",
    "Learning-based diagnosis": "基于机器学习的诊断",
    "Laboratory bridge setup": "实验室桥梁模型",
    "Damage-index distributions": "损伤指标分布",
    "03 · Measuring in real conditions": "03 · 真实环境中的测量",
    "Cameras offer a non-contact way to measure structural displacement. My work in this area investigates phase-based measurement, Gabor-wavelet parameter selection, and robustness under changing illumination.": "相机为结构位移测量提供了非接触手段。我在这一方向研究基于相位的测量、Gabor 小波参数选择，以及光照变化下的测量鲁棒性。",
    "I also study how environmental conditions influence monitoring data, including temperature effects on strain retrieval in a field-monitored footbridge.": "我也研究环境条件对监测数据的影响，包括人行桥现场监测中温度对应变重构的影响。",
    "Vision measurement experiment": "视觉测量试验",
    "Displacement measurement comparison": "位移测量结果对比",
    "Field monitoring of a footbridge": "人行桥现场监测",
    "04 · Mechanics and uncertainty": "04 · 力学与不确定性",
    "Structural identification & Bayesian methods": "结构识别与贝叶斯方法",
    "My research in structural identification uses virtual mass modification, modal information, data fusion, and Bayesian inference to infer structural condition. This combines mechanical models with measured responses and explicit treatment of uncertainty.": "在结构识别方面，我利用虚拟质量修改、模态信息、数据融合与贝叶斯推断评估结构状态，将力学模型与实测响应相结合，并显式考虑不确定性。",
    "Related studies address bridge dynamics, cable interactions, influence-line identification, and structural safety under collision.": "相关研究还涉及桥梁动力学、拉索相互作用、影响线识别及碰撞作用下的结构安全。",
    "Structural and finite-element models": "结构与有限元模型",
    "Experimental frame and sensors": "试验框架与传感器",
    "Damage identification results": "损伤识别结果",
    "05 · Learning material behaviour": "05 · 学习材料行为",
    "In collaborative work, I apply explainable machine learning to engineering material properties. The aim is to connect prediction with an understanding of influential parameters and uncertainty.": "在合作研究中，我将可解释机器学习应用于工程材料性能分析，结合性能预测、关键参数解释与不确定性分析。",
    "Applications include multiscale thermal-conductivity modelling of polymer nanocomposites and prediction of asphalt rheological properties for paving and maintenance.": "应用包括聚合物纳米复合材料的多尺度导热建模，以及面向路面铺设与养护的沥青流变性能预测。",
    "Multiscale material modelling": "多尺度材料建模",
    "Modelling and learning framework": "建模与机器学习框架",
    "Explaining material predictions": "材料性能预测的解释",
    "Current focus at DTU": "目前在 DTU 的研究重点",
    "At DTU Wind and Energy Systems, I work on": "在丹麦技术大学风能与能源系统系，我研究",
    "structural health monitoring, digital twins, computer vision, operations, and predictive maintenance for wind turbines": "风力发电机组的结构健康监测、数字孪生、计算机视觉、运行与预测性维护",
    ". This builds on my experience in structural dynamics and infrastructure monitoring.": "，以结构动力学与基础设施监测的研究经验为基础。",
    "Discuss a collaboration →": "交流合作 →",
    "Research projects": "科研项目",
    "Project and role": "项目与职责",
    "POLIMI Excellence Postdoctoral Fellowship": "米兰理工大学卓越博士后项目",
    "— Development and Value Quantification of Low Carbon Footprint Structural Health Monitoring Systems for Bridge Integrity Management. Principal Investigator. €109,600. Concluded upon departure from Politecnico di Milano; final report submitted.": "— 面向桥梁完整性管理的低碳结构健康监测系统开发与价值量化。项目负责人。资助金额：109,600欧元。离开米兰理工大学时结题，已提交最终报告。",
    "Sep 2024–Aug 2026": "2024年9月—2026年8月",
    "SHM of Bridges": "桥梁结构健康监测",
    "— Finnish Transport Infrastructure Agency, City of Espoo, and City of Helsinki; recipients Weiwei Lin and VTT Oy. Key Researcher. €160,000. Completed.": "— 芬兰交通基础设施局、埃斯波市与赫尔辛基市资助；获资助方为 Weiwei Lin 与 VTT Oy。主要研究人员。资助金额：160,000欧元。已完成。",
    "Sep 2021–Aug 2024": "2021年9月—2024年8月",
    "Automated Inspection System for Bridges using Drive-By Method and Deep Learning": "基于间接监测与深度学习的桥梁自动检测系统",
    "— Jane and Aatos Erkko Foundation, grant 210018; recipient Weiwei Lin. Key Researcher. €346,000. Completed.": "— Jane and Aatos Erkko 基金会资助，项目编号210018；获资助人为 Weiwei Lin。主要研究人员。资助金额：346,000欧元。已完成。",
    "Jan 2019–Dec 2022": "2019年1月—2022年12月",
    "Structural damage identification and experiment study of slab track based on adding virtual physical parameters": "基于附加虚拟物理参数的板式轨道结构损伤识别与试验研究",
    "— NSFC grant 51878118; recipient Jilin Hou. Key Researcher. CNY 680,000. Completed.": "— 国家自然科学基金项目51878118；获资助人为 Jilin Hou。主要研究人员。资助金额：68万元人民币。已完成。",
    "Browse all publications →": "浏览全部论文 →",
    "Journal articles, conference papers, and preprints.": "期刊论文、会议论文与预印本。",
    "Browse publications by Zhenkun Li by year, publication type, research theme, title, or author.": "按年份、论文类型、研究方向、题目或作者浏览 Zhenkun Li 的论文。",
    "Grouped by publication year; an online-first article may appear before its issue year. Preprints are listed separately from their published versions. An asterisk (*) marks a corresponding author.": "按发表年份分组；在线优先发表时间可能早于卷期年份。预印本与正式发表版本分别列出。星号（*）表示通讯作者。",
    "All years": "全部年份",
    "Type": "类型",
    "All types": "全部类型",
    "Journal article": "期刊论文",
    "Conference paper": "会议论文",
    "Preprint": "预印本",
    "Research theme": "研究方向",
    "All themes": "全部方向",
    "Reset": "重置",
    "Title, author, journal, or keyword": "英文题目、作者、期刊或关键词",
    "Filter publications": "筛选论文",
    "No matching publications. Try another keyword or reset the filters.": "未找到匹配的论文，请更换关键词或重置筛选条件。",
    "Abstract": "摘要",
    "Publisher ↗": "出版商 ↗",
    "Structural engineering, sustainable infrastructure, and research supervision.": "结构工程、可持续基础设施与科研指导。",
    "Teaching and pedagogical training at Aalto University, with links to thesis supervision.": "在阿尔托大学的教学经历、教学培训与学位论文指导。",
    "Courses": "课程教学",
    "I have served as a teaching assistant in the Department of Civil Engineering at Aalto University, supporting courses at both bachelor’s and master’s levels.": "我曾在阿尔托大学土木工程系担任助教，参与本科与硕士课程教学。",
    "2025 · Spring": "2025年 · 春季",
    "Sustainability and Circular Economy in Civil Engineering": "土木工程中的可持续发展与循环经济",
    "Master’s course · Aalto University": "硕士课程 · 阿尔托大学",
    "Teaching assistant. Course teacher: Weiwei Lin.": "担任助教。课程教师：Weiwei Lin。",
    "2022–2025 · Autumn": "2022—2025年 · 秋季",
    "Maintenance and Repair of Structures": "结构维护与修复",
    "The course covers maintenance, repair, strengthening, corrosion protection, and residual service-life evaluation. Students develop a report on sustainable repair measures for an existing project.": "课程涵盖结构维护、修复、加固、防腐与剩余使用寿命评估。学生针对既有工程提出可持续修复措施，并完成报告。",
    "Archived course pages:": "历年课程页面：",
    "2021 · Autumn": "2021年 · 秋季",
    "Fundamentals of Structural Design": "结构设计基础",
    "Bachelor’s course · Aalto University": "本科课程 · 阿尔托大学",
    "Teaching assistant. Course teacher: Athanasios Markou.": "担任助教。课程教师：Athanasios Markou。",
    "Pedagogical training": "教学培训",
    "Training": "培训课程",
    "Credits": "学分",
    "A! Peda Intro": "A! Peda 教学入门",
    "Teaching assistant as a learning instructor": "作为学习指导者的助教",
    "Doctoral supervision": "博士生指导",
    "Thesis supervision": "学位论文指导",
    "My supervision spans doctoral, master’s, and bachelor’s research on indirect bridge monitoring, modal identification, and computer vision.": "我指导博士、硕士与本科阶段的研究，方向包括桥梁间接监测、模态识别与计算机视觉。",
    "See supervised research and collaborations →": "查看学生指导与合作研究 →",
    "News & activities": "动态与学术活动",
    "Research updates, invited talks, and academic events.": "研究进展、邀请报告与学术活动。",
    "News, invited lectures, and conference organisation by Zhenkun Li.": "Zhenkun Li 的研究动态、邀请报告与学术会议组织工作。",
    "Upcoming sessions in 2027": "2027年专题会议预告",
    "I am organising the following sessions:": "我参与组织以下专题会议：",
    "Event": "会议",
    "Session": "专题",
    ", Copenhagen, Denmark · 29 June–2 July": "，丹麦哥本哈根 · 6月29日—7月2日",
    "Digital Twins for Health Monitoring and Management: Sensing, Hybrid Modelling and Predictive O&M.": "健康监测与管理中的数字孪生：感知、混合建模与预测性运维。",
    ", Perugia, Italy · 7–10 September": "，意大利佩鲁贾 · 9月7—10日",
    "Mobile and indirect sensing for scalable bridge health monitoring.": "面向规模化桥梁健康监测的移动与间接感知。",
    ", Tokyo, Japan · 18–21 October": "，日本东京 · 10月18—21日",
    "Crowdsensing for Scalable Life-Cycle Infrastructure Monitoring.": "面向规模化基础设施全寿命周期监测的群智感知。",
    "October 1, 2026": "2026年10月1日",
    "I have joined": "我已加入",
    "Department of Wind and Energy Systems (DTU Wind)": "风能与能源系统系（DTU Wind）",
    "at": "，隶属于",
    "as a Postdoctoral Researcher, where my research will contribute to operations and maintenance of wind turbines.": "，担任博士后研究员，研究风力发电机组的运行与维护。",
    "The team I supervised received the": "我指导的团队获得了",
    "Audience Prize (€3,000)": "观众奖（3,000欧元）",
    "at the": "，赛事为",
    "EWSHM 2026 Young Researcher Challenge": "EWSHM 2026 青年研究者挑战赛",
    ", working on data-driven detection of trends and anomalies in civil engineering applications.": "，研究土木工程应用中基于数据驱动的趋势与异常检测。",
    "Team members and supervision": "团队成员与指导情况",
    "January 29, 2026": "2026年1月29日",
    "The paper": "论文",
    "co-authored with Weiwei Lin, Chul-Woo Kim, Maria Pina Limongelli, and Eleni Chatzi has been published by": "由我与 Weiwei Lin、Chul-Woo Kim、Maria Pina Limongelli 和 Eleni Chatzi 合作完成，已发表于",
    "July 3, 2024": "2024年7月3日",
    "co-authored with Yifu Lan, Kun Feng and Weiwei Lin has been published by": "由我与 Yifu Lan、Kun Feng 和 Weiwei Lin 合作完成，已发表于",
    "July 2, 2024": "2024年7月2日",
    "co-authored with Yifu Lan and Weiwei Lin has been published by": "由我与 Yifu Lan 和 Weiwei Lin 合作完成，已发表于",
    "February 29, 2024": "2024年2月29日",
    "My doctoral thesis entitled": "我的博士论文",
    "is granted the dean’s doctoral dissertation award at": "获得院长优秀博士论文奖，颁奖学院为",
    "School of Engineering": "工程学院",
    ". This award is granted in recognition of an outstanding doctoral dissertation and the research work conducted in its preparation, see the news": "。该奖项表彰优秀博士论文及其研究工作，相关报道见",
    "here": "此处",
    "January 29, 2024": "2024年1月29日",
    "With": "我与",
    ", we are starting a special issue entitled": "共同策划专题",
    "in the journal of": "，发表于期刊",
    "(EI Indexed). This special issue aims to implement advanced intelligence technologies to monitor the structural health status of various devices and infrastructures in civil engineering, including railroad tracks, catenary, bridges, noise barrier, tunnels, etc. This will involve the utilization of cutting-edge sensors, such as high-definition camera, Ground Penetrating Radar (GPR), wireless sensor network, or drone sensing system.": "（EI收录）。该专题关注利用先进智能技术监测轨道、接触网、桥梁、声屏障和隧道等土木工程设施的结构健康状态，涉及高清相机、探地雷达、无线传感器网络与无人机感知系统等技术。",
    "January 17, 2024": "2024年1月17日",
    "co-authored with Yifu Lan and Weiwei Lin has been accepted by": "由我与 Yifu Lan 和 Weiwei Lin 合作完成，已被以下期刊接收：",
    "co-authored with Yifu Lan and Weiwei Lin is accepted by": "由我与 Yifu Lan 和 Weiwei Lin 合作完成，已被以下期刊接收：",
    "October 29, 2023": "2023年10月29日",
    "authored by": "作者为",
    ", myself, and": "、我与",
    "is accepted by": "，已被以下期刊接收：",
    ". In this paper, I helped with developing Finite Element Model (FEM) of the vehicle-bridge interaction process using MATLAB. Congrats to Yifu, well deserved!": "。在这项工作中，我协助使用 MATLAB 建立车桥耦合过程的有限元模型。祝贺 Yifu！",
    "October 6, 2023": "2023年10月6日",
    "I am happy to share that I have had my defense at Aalto University with thesis entitled": "我已在阿尔托大学完成博士答辩，论文题目为",
    ". Thank you all for the help in this interesting journey!": "。感谢大家在这段研究历程中的帮助！",
    "September 18, 2023": "2023年9月18日",
    ", myself, Keijo Koski, Ludovic Fülöp, Timo Tirkkonen and": "、我、Keijo Koski、Ludovic Fülöp、Timo Tirkkonen 与",
    ". Congrats to Yifu!": "。祝贺 Yifu！",
    "July 21, 2023": "2023年7月21日",
    "Together with": "我与",
    ", we are managing a special issue entitled": "共同组织专题",
    "(IF=2.7). Research on new design strategies, modern architectural and structural concepts for the new structures, machine learning, innovation in material technology or construction chain, or the retrofit of the ancient and traditional structures will be considered for publication.": "（当时影响因子为2.7）。专题涵盖新设计策略、新型建筑与结构理念、机器学习、材料技术与建造流程创新，以及古建筑与传统结构改造等研究。",
    "July 20, 2023": "2023年7月20日",
    ", myself,": "、我、",
    "and": "与",
    ". In this paper, I was responsible for Finite Element Modeling using Abaqus driven by Python. One interested in this paper can find its preprint version in": "。在这项工作中，我负责利用 Python 驱动 Abaqus 进行有限元建模，预印本可在以下页面查看：",
    "July 2-6, 2023": "2023年7月2—6日",
    "I am attending": "我参加了",
    "in Milano, Italy. More pictures can be found": "，地点为意大利米兰。更多照片见",
    "HERE": "相册",
    ". Thanks, all friends, for the interesting topics and nice dinner.": "。感谢朋友们带来的精彩交流与聚会。",
    "June 15, 2023": "2023年6月15日",
    "co-authored with Weiwei Lin and Youqi Zhang is accepted by": "由我与 Weiwei Lin 和 Youqi Zhang 合作完成，已被以下期刊接收：",
    "June 8, 2023": "2023年6月8日",
    "April 6, 2023": "2023年4月6日",
    "Zhenkun Li was awarded an incentive grant in": "我获得了激励资助，详情见",
    "Fabian and Jaakko Ahvenainen Foundation grants awarded for the year 2022": "Fabian and Jaakko Ahvenainen 基金会2022年度资助名单",
    "Invited talks": "邀请报告",
    "Date": "日期",
    "Talk and venue": "报告与地点",
    "30 Dec 2025": "2025年12月30日",
    "Bridge condition sensing based on vehicle response: Theories and experiments.": "基于车辆响应的桥梁状态感知：理论与试验。",
    "Yuelu Forum, Hunan University, China.": "中国湖南大学，岳麓论坛。",
    "29 Sep 2025": "2025年9月29日",
    "Bridge sensing simulation and algorithm research based on vehicle response.": "基于车辆响应的桥梁感知仿真与算法研究。",
    "Second International Young Scholars Forum of the National Institute of Information and Communication Technology and Tianmushan Laboratory, Beihang University, China.": "中国北京航空航天大学国家信息与通信技术研究院、天目山实验室第二届国际青年学者论坛。",
    "29 Oct 2024": "2024年10月29日",
    "Indirect structural health monitoring for bridges using responses of passing vehicles.": "利用过桥车辆响应的桥梁间接结构健康监测。",
    "Beiyang Young Scholar Forum, Tianjin University, China.": "中国天津大学，北洋青年科学家论坛。",
    "24 Oct 2024": "2024年10月24日",
    "Bridge modal parameter identification and health monitoring based on vehicle responses.": "基于车辆响应的桥梁模态参数识别与健康监测。",
    "Qilu Youth Forum, Shandong University, China.": "中国山东大学，齐鲁青年论坛。",
    "19 Jun 2024": "2024年6月19日",
    "Drive-by based bridge health monitoring and condition assessment: Lab and field tests.": "桥梁间接健康监测与状态评估：实验室与现场试验。",
    "Advancing Bridge Sustainability: Workshop on Long-Term Indirect Monitoring, Espoo, Finland.": "芬兰埃斯波，提升桥梁可持续性：长期间接监测研讨会。",
    "14 Dec 2023": "2023年12月14日",
    "Structural health monitoring for bridges based on vehicle responses.": "基于车辆响应的桥梁结构健康监测。",
    "Chang’an Scholar Forum, Chang’an University, China.": "中国长安大学，长安学者论坛。",
    "25 May 2023": "2023年5月25日",
    "Towards smart cities: indirect bridge health monitoring using responses of passing vehicles.": "迈向智慧城市：利用过桥车辆响应的桥梁间接健康监测。",
    "Research Breakfast, Aalto University, Finland.": "芬兰阿尔托大学，科研早餐会。",
    "Conference & workshop organisation": "会议与研讨会组织",
    "Sessions and mini-symposia I have organised:": "我参与组织的专题与分会：",
    "Session or activity": "专题或活动",
    ", Dresden, Germany · 26–28 Aug": "，德国德累斯顿 · 8月26—28日",
    "Crowdsourced and indirect approaches to Structural Health Monitoring.": "结构健康监测中的众包与间接方法。",
    ", Sheffield, UK · 19–22 Jul": "，英国谢菲尔德 · 7月19—22日",
    "Advances in Modeling and Data-driven Techniques in Vibration-based Structural Monitoring.": "基于振动的结构监测中的建模与数据驱动技术进展。",
    ", Orlando, USA · 7–10 Jul": "，美国奥兰多 · 7月7—10日",
    "Repurposing Urban Data Streams for Scalable Infrastructure Health Monitoring; Recent Advances in Artificial Intelligence and Computer Vision for Bridge Health Monitoring.": "利用城市数据流开展规模化基础设施健康监测；人工智能与计算机视觉在桥梁健康监测中的最新进展。",
    ", Boulder, USA · 2–5 Jun": "，美国博尔德 · 6月2—5日",
    "Repurposing Urban Data Streams for Scalable Infrastructure Monitoring; Towards Autonomous Resilience: Generative AI and Agentic Workflows for Infrastructure Systems.": "利用城市数据流开展规模化基础设施监测；迈向自主韧性：基础设施系统中的生成式人工智能与智能体工作流。",
    ", Dublin, Ireland · Sep": "，爱尔兰都柏林 · 9月",
    "Advances in Vibration-based Structural Health Monitoring for Bridge Structures; Innovations in Structural Health Monitoring and Management towards Climate Resilient Transport Infrastructure.": "基于振动的桥梁结构健康监测进展；面向气候韧性交通基础设施的结构健康监测与管理创新。",
    ", Graz, Austria · Sep": "，奥地利格拉茨 · 9月",
    "Structural Health Monitoring of Transport Infrastructures using Drive-by Monitoring; Structural Health Monitoring of Intelligent Civil Infrastructure using Fibre Optic Sensing.": "基于间接监测的交通基础设施结构健康监测；基于光纤感知的智能土木基础设施结构健康监测。",
    ", Beijing, China · 17–20 Jul": "，中国北京 · 7月17—20日",
    "Advances in Fiber optic sensing for intelligent Structural Health Monitoring.": "面向智能结构健康监测的光纤感知进展。",
    ", Porto, Portugal · 2–4 Jul": "，葡萄牙波尔图 · 7月2—4日",
    "Indirect Structural Health Monitoring (iSHM) of transportation infrastructures using responses of passing vehicles.": "利用过桥车辆响应的交通基础设施间接结构健康监测。",
    "Workshop": "研讨会",
    ", Espoo, Finland · Dec 2024": "，芬兰埃斯波 · 2024年12月",
    "Advancing bridge sustainability: workshop on long-term indirect monitoring.": "提升桥梁可持续性：长期间接监测研讨会。",
    "Shared research across sensing, mechanics, and infrastructure monitoring.": "围绕感知、力学与基础设施监测开展合作研究。",
    "Thesis supervision, the EWSHM Young Researcher Challenge, and international collaborations.": "学位论文指导、EWSHM 青年研究者挑战赛与国际合作。",
    "— Joint PhD advisor, Politecnico di Milano and Southwest Jiaotong University, with Maria Pina Limongelli and Ping Wang.": "— 博士生联合导师，米兰理工大学与西南交通大学，与 Maria Pina Limongelli 和 Ping Wang 共同指导。",
    "— Doctoral thesis advisor.": "— 博士学位论文导师。",
    ". Ongoing.": "。在研。",
    "Master’s supervision": "硕士生指导",
    "Bachelor’s supervision": "本科生指导",
    "I supervised a team working on": "我指导的团队研究",
    "data-driven detection of trends and anomalies in civil engineering applications": "土木工程应用中基于数据驱动的趋势与异常检测",
    ". The team received the": "，并获得",
    "Team member": "团队成员",
    "Institution": "单位",
    "KTH Royal Institute of Technology, Sweden": "瑞典皇家理工学院，瑞典",
    "Politecnico di Bari, Italy": "巴里理工大学，意大利",
    "Politecnico di Milano, Italy": "米兰理工大学，意大利",
    "International collaborations": "国际合作",
    "Research topics": "研究主题",
    "ETH Zurich, Switzerland": "苏黎世联邦理工学院，瑞士",
    "Digital twinning, physics-informed deep learning, and satellite-based monitoring.": "数字孪生、物理信息深度学习与卫星监测。",
    "University College Dublin, Ireland": "都柏林大学，爱尔兰",
    "Crowdsensing, human-based sensing, smartphones, deep learning, and smart cities.": "群智感知、人体感知、智能手机、深度学习与智慧城市。",
    "University of Twente, Netherlands": "特温特大学，荷兰",
    "Computer vision, operational and environmental effects, and deep learning.": "计算机视觉、运营与环境影响，以及深度学习。",
    "University of Central Florida, USA": "中佛罗里达大学，美国",
    "Robotics, computer vision, drive-by monitoring, and latent infrastructure sensing.": "机器人、计算机视觉、桥梁间接监测与潜在基础设施感知。",
    "Explore our related publications →": "查看相关论文 →",
    "Papers, research profiles, and materials for further reading.": "论文、学术主页与延伸阅读资料。",
    "Access Zhenkun Li’s CV, publications, doctoral thesis, and research profiles.": "获取 Zhenkun Li 的简历、论文、博士学位论文与学术主页。",
    "Curriculum vitae": "个人简历",
    "Download my CV (PDF) ↓": "下载简历（PDF）↓",
    "Papers & thesis": "论文与学位论文",
    "Doctoral thesis": "博士学位论文",
    "— Journal articles, conference papers, and preprints, with DOI and PDF links where available.": "— 期刊论文、会议论文与预印本，提供可用的 DOI 与 PDF 链接。",
    ", Aalto University, 2023.": "，阿尔托大学，2023年。",
    "— Representative studies and figures organised by topic.": "— 按主题整理的代表性研究与论文图片。",
    "Research profiles": "学术主页",
    "Data & code enquiries": "数据与代码咨询",
    "For questions about data, numerical models, or code associated with a particular paper, please include the paper title or DOI when": "如需咨询某篇论文的数据、数值模型或代码，请注明论文题目或 DOI，并",
    "contacting me": "联系我",
    "Conferences, colleagues, and academic exchanges.": "学术会议、同事与学术交流。",
    "Photographs from conferences and academic exchanges by Zhenkun Li.": "Zhenkun Li 参加学术会议与交流活动的照片。",
    "Milan, Italy · 2–6 July 2023": "意大利米兰 · 2023年7月2—6日",
    "With Eugen Brühwiler.": "与 Eugen Brühwiler 合影。",
    "With Mitsuyoshi Akiyama.": "与 Mitsuyoshi Akiyama 合影。",
    "With You Dong.": "与 You Dong 合影。",
    "With Necati Catbas.": "与 Necati Catbas 合影。",
    "With friends and colleagues at IALCCE 2023.": "在 IALCCE 2023 与朋友和同事合影。",
    "Academic exchange in Osaka": "大阪学术交流",
    "Osaka, Japan · 7–15 January 2020": "日本大阪 · 2020年1月7—15日",
    "Academic exchange in Osaka, January 2020.": "2020年1月，大阪学术交流。",
    "With colleagues during the academic exchange in Osaka.": "大阪学术交流期间与同事合影。",
    "Nanjing, China · 5–8 September 2019": "中国南京 · 2019年9月5—8日",
    "Conference participants at EVACES 2019 in Nanjing.": "南京 EVACES 2019 会议参会者合影。",
    "With colleagues at EVACES 2019.": "在 EVACES 2019 与同事合影。",
    "With Satish Nagarajaiah at EVACES 2019.": "在 EVACES 2019 与 Satish Nagarajaiah 合影。",
    "Qingdao, China · 22–25 July 2018": "中国青岛 · 2018年7月22—25日",
    "With Łukasz Jankowski and colleagues at 7WCSCM.": "在 7WCSCM 与 Łukasz Jankowski 及同事合影。",
    "Online conferences": "线上参会",
    ", Orlando, USA · 5–8 June 2022 — attended online.": "，美国奥兰多 · 2022年6月5—8日 — 线上参会。",
    ", Saitama, Japan · 14–17 September 2021 — attended online.": "，日本埼玉 · 2021年9月14—17日 — 线上参会。",
    "Page not found": "未找到页面",
    "Return to Zhenkun Li’s academic website or search for a page.": "返回 Zhenkun Li 的学术网站，或搜索所需页面。",
    "The page may have moved. Use the navigation or site search to find what you need.": "该页面可能已移动，请通过导航或站内搜索查找所需内容。",
    "Back to the homepage": "返回首页",
    "Explore research": "了解研究",
    "Browse publications": "浏览论文"
  };

  const normalize = text => text.replace(/\s+/g, ' ').replace(/[‘’]/g, "'").replace(/[“”]/g, '"').trim();
  const chinese = new Map(Object.entries(translations).map(([en, zh]) => [normalize(en), zh]));
  const translate = text => {
    const key = normalize(text);
    if (chinese.has(key)) return chinese.get(key);
    if (/^PDF p\. \d+$/.test(key)) return key.replace(/^PDF p\. (\d+)$/, 'PDF 第 $1 页');
    if (/^\d+ matching documents?$/.test(key)) return key.replace(/^(\d+) matching documents?$/, '找到 $1 个页面');
    if (/^\d+ more matches in this document$/.test(key)) return key.replace(/^(\d+) more matches in this document$/, '本页还有 $1 处匹配');
    if (/^\(\d{4}\), Fig\. \d+\.?$/.test(key)) return key.replace(/^\((\d{4})\), Fig\. (\d+)(\.)?$/, '（$1），图 $2$3');
    const total = key.match(/^(\d+) records · (\d+) journal articles · (\d+) conference papers · (\d+) preprints$/);
    if (total) return `${total[1]} 篇论文 · ${total[2]} 篇期刊论文 · ${total[3]} 篇会议论文 · ${total[4]} 篇预印本`;
    const label = key.split(' · ');
    if (label.length === 2 && chinese.has(label[0]) && chinese.has(label[1])) return label.map(part => chinese.get(part)).join(' · ');
    if (key.startsWith('View full-size figure: ')) return '查看大图：' + translate(key.slice(23));
    return text;
  };
  // Keep paper and thesis references in their original language across every page.
  const paperContent = '.publication h3, .publication-authors, .publication-venue, .publication-note, .publication details p, ' +
    '.reading-item, .research-studies a, a[href*="#pub-"], a[href*="doi.org/"]:not(.image-credit), ' +
    'a[href*="aaltodoc.aalto.fi/"]:not(strong a), main em';
  document.querySelectorAll(paperContent).forEach(element => element.lang = 'en');
  const skip = `script, style, code, pre, #site-language-toggle, #site-theme-toggle, #pub-count, ${paperContent}`;
  const textNodes = new Map();
  const attributes = new Map();
  const attributeNames = ['title', 'aria-label', 'placeholder', 'alt'];
  let language = 'en';
  try { language = localStorage.getItem('site-language') === 'zh' ? 'zh' : 'en'; } catch {}
  const translatedValue = original => {
    const translated = translate(original);
    return language === 'zh' && translated !== original
      ? original.replace(/\S[\s\S]*\S|\S/, translated) : original;
  };
  const translateNode = (node, original) => {
    const value = translatedValue(original);
    if (node.nodeValue !== value) node.nodeValue = value;
  };
  const collect = root => {
    if (root.nodeType === Node.TEXT_NODE) {
      if (!root.parentElement?.closest(skip) && root.nodeValue.trim()) {
        const original = textNodes.get(root);
        if (original === undefined || (root.nodeValue !== original && root.nodeValue !== translatedValue(original))) {
          textNodes.set(root, root.nodeValue);
        }
        translateNode(root, textNodes.get(root));
      }
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE || root.matches(skip)) return;
    if (!attributes.has(root)) {
      const originals = attributeNames.filter(name => root.hasAttribute(name)).map(name => [name, root.getAttribute(name)]);
      attributes.set(root, originals);
      for (const [name, original] of originals) root.setAttribute(name, language === 'zh' ? translate(original) : original);
    }
    for (const child of root.childNodes) collect(child);
  };

  const tools = document.querySelector('.quarto-navbar-tools');
  const languageButton = document.createElement('button');
  languageButton.id = 'site-language-toggle';
  languageButton.type = 'button';
  languageButton.className = 'site-control';
  tools.prepend(languageButton);
  const nativeThemeToggle = tools.querySelector('.quarto-color-scheme-toggle');
  const themeButton = document.createElement('button');
  themeButton.id = 'site-theme-toggle';
  themeButton.type = 'button';
  themeButton.className = 'site-control quarto-color-scheme-toggle';
  themeButton.innerHTML = '<svg class="theme-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M20.9 13.2A9 9 0 0 1 10.8 3.1a9 9 0 1 0 10.1 10.1Z"/></svg><svg class="theme-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>';
  nativeThemeToggle.replaceWith(themeButton);
  const updateThemeButton = () => {
    const dark = document.body.classList.contains('quarto-dark');
    const label = language === 'zh' ? (dark ? '切换到日间模式' : '切换到夜间模式') : (dark ? 'Switch to light mode' : 'Switch to dark mode');
    themeButton.title = label;
    themeButton.setAttribute('aria-label', label);
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.classList.toggle('alternate', dark);
  };
  themeButton.addEventListener('click', () => window.quartoToggleColorScheme());
  new MutationObserver(updateThemeButton).observe(document.body, {attributes: true, attributeFilter: ['class']});
  const originalTitle = document.title;
  const applyLanguage = () => {
    document.documentElement.lang = language === 'zh' ? 'zh-Hans' : 'en';
    document.title = language === 'zh' ? originalTitle.split(' – ').map(translate).join(' – ') : originalTitle;
    for (const [node, original] of textNodes) translateNode(node, original);
    for (const [element, originals] of attributes) {
      for (const [name, original] of originals) element.setAttribute(name, language === 'zh' ? translate(original) : original);
    }
    languageButton.textContent = language === 'zh' ? 'EN' : '中文';
    languageButton.lang = language === 'zh' ? 'en' : 'zh-Hans';
    languageButton.title = language === 'zh' ? 'Switch to English' : '切换到中文';
    languageButton.setAttribute('aria-label', languageButton.title);
    updateThemeButton();
    document.dispatchEvent(new Event('site-language-change'));
  };
  collect(document.body);
  applyLanguage();
  languageButton.addEventListener('click', () => {
    language = language === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem('site-language', language); } catch {}
    applyLanguage();
  });
  // Quarto creates its search dialog on demand; translate those controls when added.
  new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.type === 'characterData') collect(mutation.target);
      else for (const node of mutation.addedNodes) collect(node);
    }
  }).observe(document.body, {childList: true, characterData: true, subtree: true});
})();
