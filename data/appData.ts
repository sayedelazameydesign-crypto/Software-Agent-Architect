import { LayerDef, StepDef, MetricData } from '../types';
import { User, Search, PenTool, Code } from 'lucide-react';

export const layers: LayerDef[] = [
  { id: 7, name: 'واجهة الأعمال', enName: 'Business Facade', description: 'نقطة الاتصال مع العميل، ترجمة لغة السوق.', color: 'bg-green-600' },
  { id: 6, name: 'محرك العمليات', enName: 'Process Engine', description: 'إدارة سير العمل ومنطق الأعمال الأساسي.', color: 'bg-emerald-600' },
  { id: 5, name: 'مدير المشاريع', enName: 'Project Manager', description: 'التخطيط، الجدولة، وإدارة الموارد.', color: 'bg-teal-600' },
  { id: 4, name: 'منسق التقنية', enName: 'Tech Coordinator', description: 'الربط بين المتطلبات والتنفيذ التقني.', color: 'bg-cyan-600' },
  { id: 3, name: 'مراقب الجودة', enName: 'Quality Monitor', description: 'ضمان المعايير، التوفر، والأمان.', color: 'bg-blue-600' },
  { id: 2, name: 'نواة التنفيذ', enName: 'Execution Core', description: 'تنفيذ الأوامر، التعامل مع البنية التحتية.', color: 'bg-indigo-600' },
  { id: 1, name: 'البنية التحتية', enName: 'Infrastructure', description: 'قواعد البيانات، الخوادم، الشبكات.', color: 'bg-violet-600' },
];

export const flowSteps: StepDef[] = [
    { id: 1, title: 'العميل', icon: User, desc: 'تقديم الطلب المبدئي' },
    { id: 2, title: 'تحليل المتطلبات', icon: Search, desc: 'Business Context Parsing' },
    { id: 3, title: 'تصميم الحلول', icon: PenTool, desc: 'Technical Architecture' },
    { id: 4, title: 'تنفيذ برمجي', icon: Code, desc: 'Development Context' },
];

export const qualityMetrics: MetricData[] = [
  { name: 'Optimal', value: 99.5, fill: '#10b981' }, 
  { name: 'Downtime', value: 0.5, fill: '#334155' }, 
];

export const performanceMetrics: MetricData[] = [
  { name: 'الاستجابة', actual: 100, target: 100, unit: '%' },
  { name: 'الأمان', actual: 100, target: 100, unit: '%' },
  { name: 'التوافقية', actual: 100, target: 100, unit: '%' },
];